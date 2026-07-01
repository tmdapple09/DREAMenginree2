import { ConstraintSolver } from './constraint-solver';
import { validateCreativeOption } from './creative-validator';
import type {
    Asset,
    Constraint,
    CreativeContext,
    CreativeOptimizerResult,
    CreativeOption,
    CreativeScore,
    FeedItem,
    Notification,
    OptimizationItem,
    OptimizerConfig,
    QueuedAction,
    RankedCreativeOption,
    RankedItem,
    RuntimeContext,
    SearchResult,
    WidgetPriority,
    HardFailureReason,
} from './types';



export class DreamOptimizer {
  private solver: ConstraintSolver;
  private config: OptimizerConfig;
  
  private context: RuntimeContext;

  constructor(config: OptimizerConfig, context: RuntimeContext = {}) {
    this.config = config;
    this.context = context;
    this.solver = new ConstraintSolver({
      maxIterations: config.optimizer.max_iterations,
      convergenceThreshold: config.optimizer.convergence_threshold,
      timeoutMs: config.performance.max_optimization_time_ms,
    });
  }

  
  optimizeFeed(feedItems: FeedItem[]): RankedItem<FeedItem>[] {
    if (!this.config.feed_selection?.enabled) {
      return feedItems.map((item, index: number) => ({
        item,
        score: 1,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = feedItems.map((item) => ({
      id: item.id,
      score: 0,
      metadata: {
        favorites: item.is_favorite ? 1 : 0,
        source_preference: this.calculateSourcePreference(item.source),
        recency: this.calculateRecency(item.timestamp),
        privacy: this.calculatePrivacyScore(item.privacy_level),
        engagement: this.calculateEngagementScore(item.engagement),
        user_selected_sources: this.context.sourcePreferences?.[item.source] ?? 0.5,
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.feed_selection.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: feedItems.find((f) => f.id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeSearch(
    searchResults: SearchResult[],
    userPermissions: string[]
  ): RankedItem<SearchResult>[] {
    if (!this.config.search_ranking?.enabled) {
      return searchResults.map((item, index: number) => ({
        item,
        score: item.relevance_score,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = searchResults.map((result) => ({
      id: result.id,
      score: 0,
      metadata: {
        relevance: result.relevance_score,
        user_permissions: this.checkPermissions(result, userPermissions),
        system_location: this.calculateLocationScore(result.type),
        recency: result.metadata?.timestamp
          ? this.calculateRecency(new Date(result.metadata.timestamp as string | number))
          : 0.5,
        content_type: this.calculateTypeScore(result.type),
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.search_ranking.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: searchResults.find((s) => s.id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeWidgets(widgets: WidgetPriority[]): RankedItem<WidgetPriority>[] {
    if (!this.config.widget_priority?.enabled) {
      return widgets.map((item, index: number) => ({
        item,
        score: 1,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = widgets.map((widget) => ({
      id: widget.widget_id,
      score: 0,
      metadata: {
        interaction_frequency: Math.min(1, widget.interaction_frequency / 100),
        screen_size: this.resolveScreenSizeScore(),
        device_type: this.resolveDeviceTypeScore(),
        layout_density: this.resolveLayoutDensityScore(),
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.widget_priority.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: widgets.find((w) => w.widget_id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeAssetLoading(assets: Asset[]): RankedItem<Asset>[] {
    if (!this.config.asset_loading?.enabled) {
      return assets.map((item, index: number) => ({
        item,
        score: 1,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = assets.map((asset) => ({
      id: asset.id,
      score: 0,
      metadata: {
        bandwidth: this.calculateBandwidthScore(asset.size_bytes),
        memory: this.calculateMemoryScore(asset.size_bytes),
        scene_importance: asset.priority,
        user_viewport: asset.in_viewport ? 1 : 0.3,
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.asset_loading.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: assets.find((a) => a.id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeNotifications(
    notifications: Notification[]
  ): RankedItem<Notification>[] {
    if (!this.config.notification_priority?.enabled) {
      return notifications.map((item, index: number) => ({
        item,
        score: 1,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = notifications.map((notif) => ({
      id: notif.id,
      score: 0,
      metadata: {
        urgency: this.calculateUrgencyScore(notif.urgency),
        interaction_history: notif.interaction_history ?? 0.5,
        sender_priority: this.context.senderPriorities?.[notif.sender_id ?? ''] ?? 0.7,
        recency: this.calculateRecency(notif.timestamp),
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.notification_priority.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: notifications.find((n) => n.id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeOfflineQueue(
    queuedActions: QueuedAction[]
  ): RankedItem<QueuedAction>[] {
    if (!this.config.offline_queue?.enabled) {
      return queuedActions.map((item, index: number) => ({
        item,
        score: 1,
        rank: index + 1,
      }));
    }

    const optimizationItems: OptimizationItem[] = queuedActions.map((action) => ({
      id: action.id,
      score: 0,
      metadata: {
        action_priority: action.priority,
        timestamp: this.calculateRecency(action.timestamp),
        data_size: 1 - Math.min(1, action.data_size_bytes / 10000000), 
        failure_count: Math.max(0, 1 - action.failure_count * 0.2), 
      },
    }));

    const ranked = this.solver.solve(
      optimizationItems,
      this.config.offline_queue.constraints
    );

    return ranked.map((r: { item: { id: string }; score: number; rank: number; metadata?: Record<string, unknown> }) => ({
      item: queuedActions.find((a) => a.id === r.item.id)!,
      score: r.score,
      rank: r.rank,
      metadata: r.metadata,
    }));
  }

  
  optimizeCreativeOptions(
    candidates: CreativeOption[],
    context?: CreativeContext
  ): CreativeOptimizerResult {
    if (!this.config.creative_options?.enabled) {
      return {
        best_candidate: null,
        ranked_candidates: [],
        rejected_candidates: [],
      };
    }

    const rejected: Array<{ option: CreativeOption; reasons: HardFailureReason[] }> = [];
    const validCandidates: Array<{
      option: CreativeOption;
      scores: CreativeScore;
    }> = [];

    
    for (const candidate of candidates) {
      
      const scores = this.scoreCreativeOption(candidate, context);

      
      const validation = validateCreativeOption(candidate);

      
      if (!validation.valid) {
        rejected.push({
          option: candidate,
          reasons: validation.failures || [],
        });
        continue;
      }

      
      validCandidates.push({
        option: candidate,
        scores,
      });
    }

    
    const constraints = this.config.creative_options.constraints;
    const rankedOptions: RankedCreativeOption[] = validCandidates.map(
      ({ option, scores }) => {
        const final_score = this.calculateCreativeFinalScore(scores, constraints);
        return {
          ...option,
          scores,
          final_score,
          rank: 0, 
          validation: { valid: true },
        };
      }
    );

    
    rankedOptions.sort((a, b) => b.final_score - a.final_score);

    
    rankedOptions.forEach((option, index: number) => {
      option.rank = index + 1;
    });

    
    const best_candidate = rankedOptions.length > 0 ? rankedOptions[0] : null;

    return {
      best_candidate,
      ranked_candidates: rankedOptions,
      rejected_candidates: rejected,
    };
  }

  
  private scoreCreativeOption(
    option: CreativeOption,
    context?: CreativeContext
  ): CreativeScore {
    return {
      novelty: this.scoreNovelty(option, context),
      usefulness: this.scoreUsefulness(option, context),
      delight: this.scoreDelight(option, context),
      fit: this.scoreFit(option, context),
      cost: this.scoreCost(option, context),
      risk: this.scoreRisk(option, context),
    };
  }

  
  private calculateCreativeFinalScore(
    scores: CreativeScore,
    constraints: Constraint[]
  ): number {
    let totalScore = 0;

    for (const constraint of constraints as Constraint[]) {
      const weight = constraint.weight;
      const priorityMultiplier = this.getWeightMultiplier(constraint.priority);
      const scoreValue = (scores as unknown as Record<string, number>)[constraint.name] || 0;

      
      if (constraint.name === 'cost' || constraint.name === 'risk') {
        totalScore -= scoreValue * weight * priorityMultiplier;
      } else {
        totalScore += scoreValue * weight * priorityMultiplier;
      }
    }

    
    return Math.max(0, Math.min(1, totalScore));
  }

  
  private scoreNovelty(option: CreativeOption, context?: CreativeContext): number {
    let score = 0.5; 

    
    if (option.variant_type && option.variant_type !== 'standard') {
      score += 0.2;
    }

    
    if (option.metadata?.isUnique === true) {
      score += 0.2;
    }

    if (option.metadata?.innovationScore) {
      score += Number(option.metadata.innovationScore) * 0.2;
    }

    
    const uncommonTones = ['experimental', 'avant-garde', 'unconventional', 'playful'];
    if (option.tone && uncommonTones.includes(option.tone.toLowerCase())) {
      score += 0.1;
    }

    return Math.min(1, score);
  }

  
  private scoreUsefulness(option: CreativeOption, context?: CreativeContext): number {
    let score = 0.5; 

    
    if (option.metadata?.practicalityScore) {
      score += Number(option.metadata.practicalityScore) * 0.3;
    }

    
    if (option.content.length > 100) {
      score += 0.1;
    }

    
    if (context?.topic && option.content.toLowerCase().includes(context.topic.toLowerCase())) {
      score += 0.2;
    }

    
    const actionablePatterns = [
      /\bcan\b/i,
      /\bwill\b/i,
      /\bhelps?\b/i,
      /\benables?\b/i,
      /\ballows?\b/i,
    ];
    if (actionablePatterns.some((p) => p.test(option.content))) {
      score += 0.1;
    }

    return Math.min(1, score);
  }

  
  private scoreDelight(option: CreativeOption, context?: CreativeContext): number {
    let score = 0.5; 

    
    if (option.metadata?.visualImpact) {
      score += Number(option.metadata.visualImpact) * 0.3;
    }

    
    const delightfulWords = [
      'beautiful', 'elegant', 'stunning', 'amazing', 'wonderful',
      'delightful', 'charming', 'vibrant', 'exciting', 'inspiring'
    ];
    const wordCount = delightfulWords.filter((word) =>
      option.content.toLowerCase().includes(word)
    ).length;
    score += Math.min(0.2, wordCount * 0.05);

    
    if (option.style === 'elegant' || option.style === 'vibrant') {
      score += 0.1;
    }

    
    if (option.tone === 'enthusiastic' || option.tone === 'playful') {
      score += 0.1;
    }

    return Math.min(1, score);
  }

  
  private scoreFit(option: CreativeOption, context?: CreativeContext): number {
    let score = 0.5; 

    if (!context) {
      return score;
    }

    
    if (context.topic && option.content.toLowerCase().includes(context.topic.toLowerCase())) {
      score += 0.2;
    }

    
    if (context.style_guide && option.style === context.style_guide) {
      score += 0.2;
    }

    
    if (context.user_preferences) {
      const prefKeys = Object.keys(context.user_preferences);
      const matchingPrefs = prefKeys.filter((key) => {
        const prefValue = context.user_preferences![key];
        return option.metadata?.[key] === prefValue;
      }).length;
      score += Math.min(0.3, matchingPrefs * 0.1);
    }

    
    if (context.constraints) {
      const violations = context.constraints.filter((constraint) =>
        option.content.toLowerCase().includes(constraint.toLowerCase())
      ).length;
      score -= violations * 0.1;
    }

    return Math.max(0, Math.min(1, score));
  }

  
  private scoreCost(option: CreativeOption, context?: CreativeContext): number {
    let cost = 0.3; 

    
    if (option.metadata?.implementationCost) {
      cost = Number(option.metadata.implementationCost);
    } else {
      
      const contentLength = option.content.length;
      if (contentLength > 1000) {
        cost += 0.2;
      } else if (contentLength > 500) {
        cost += 0.1;
      }

      
      const expensivePatterns = [
        /complex\s+algorithm/i,
        /requires\s+migration/i,
        /breaking\s+change/i,
        /large\s+refactor/i,
      ];
      if (expensivePatterns.some((p) => p.test(option.content))) {
        cost += 0.2;
      }
    }

    return Math.min(1, cost);
  }

  
  private scoreRisk(option: CreativeOption, context?: CreativeContext): number {
    let risk = 0.2; 

    
    if (option.metadata?.riskLevel) {
      risk = Number(option.metadata.riskLevel);
    } else {
      
      const riskyPatterns = [
        /experimental/i,
        /untested/i,
        /may\s+cause/i,
        /potential\s+issue/i,
        /not\s+recommended/i,
      ];
      if (riskyPatterns.some((p) => p.test(option.content))) {
        risk += 0.2;
      }

      
      if (option.variant_type === 'experimental') {
        risk += 0.1;
      }
    }

    return Math.min(1, risk);
  }

  
  private getWeightMultiplier(priority: string): number {
    switch (priority) {
      case 'critical':
        return 2.0;
      case 'high':
        return 1.5;
      case 'medium':
        return 1.0;
      case 'low':
        return 0.5;
      default:
        return 1.0;
    }
  }

  

  private calculateSourcePreference(source: string): number {
    
    return this.context.sourcePreferences?.[source] ?? 0.7;
  }

  
  
  

  
  private resolveScreenSizeScore(): number {
    if (this.context.viewportWidth === undefined) return 0.7;
    if (this.context.viewportWidth >= 1440) return 1.0;
    if (this.context.viewportWidth >= 1024) return 0.85;
    if (this.context.viewportWidth >= 768) return 0.7;
    return 0.5;
  }

  
  private resolveDeviceTypeScore(): number {
    switch (this.context.deviceType) {
      case 'desktop': return 1.0;
      case 'tablet':  return 0.8;
      case 'mobile':  return 0.5;
      default:        return 0.8;
    }
  }

  
  private resolveLayoutDensityScore(): number {
    const count = this.context.dreamWindowCount;
    if (count == null) return 0.6;
    return Math.max(0.2, 1 - (count - 1) * 0.1);
  }

  private calculateRecency(timestamp: Date): number {
    const now = new Date();
    const ageMs = now.getTime() - new Date(timestamp).getTime();
    const ageHours = ageMs / (1000 * 60 * 60);

    
    return Math.exp(-ageHours / 24);
  }

  private calculatePrivacyScore(
    privacyLevel?: 'public' | 'followers' | 'private'
  ): number {
    
    if (!privacyLevel) return 0;
    return 1; 
  }

  private calculateEngagementScore(engagement?: {
    likes: number;
    comments: number;
    shares: number;
  }): number {
    if (!engagement) return 0.5;

    const total = engagement.likes + engagement.comments * 2 + engagement.shares * 3;
    return Math.min(1, total / 100);
  }

  private checkPermissions(
    result: SearchResult,
    userPermissions: string[]
  ): number {
    
    return 1;
  }

  private calculateLocationScore(type: string): number {
    const scores: Record<string, number> = {
      surface: 0.9,
      dream: 0.8,
      content: 0.7,
      user: 0.6,
    };
    return scores[type] ?? 0.5;
  }

  private calculateTypeScore(type: string): number {
    return this.calculateLocationScore(type);
  }

  private calculateBandwidthScore(sizeBytes: number): number {
    
    return Math.max(0, 1 - sizeBytes / 10000000);
  }

  private calculateMemoryScore(sizeBytes: number): number {
    return this.calculateBandwidthScore(sizeBytes);
  }

  private calculateUrgencyScore(
    urgency: 'critical' | 'high' | 'medium' | 'low'
  ): number {
    const scores = {
      critical: 1.0,
      high: 0.75,
      medium: 0.5,
      low: 0.25,
    };
    return scores[urgency];
  }
}

export { ConstraintSolver } from './constraint-solver';
export * from './types';

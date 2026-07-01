import { registerHandler } from '../tool-router';
import {
    handleHomeAnchorSetState,
    handleHomeMenuOpen,
    handleNavDelta,
} from './navigation';
import {
    handleDreamAddFromPreset,
    handleDreamConfigPatch,
    handleDreamOpen,
    handleDreamPreview,
    handleDreamRemove,
    handleDreamReorder,
} from './dreams';
import {
    handleDraftSave,
    handleFollowUser,
    handlePostCreate,
    handlePostLike,
    handleSearch,
} from './social';














export function registerAllHandlers(): void {
  
  registerHandler('NAV_DELTA', handleNavDelta);
  registerHandler('HOME_ANCHOR_SET_STATE', handleHomeAnchorSetState);
  registerHandler('HOME_MENU_OPEN', handleHomeMenuOpen);

  
  registerHandler('DREAM_PREVIEW', handleDreamPreview);
  registerHandler('DREAM_OPEN', handleDreamOpen);
  registerHandler('DREAM_CONFIG_PATCH', handleDreamConfigPatch);
  registerHandler('DREAM_REORDER', handleDreamReorder);
  registerHandler('DREAM_ADD_FROM_PRESET', handleDreamAddFromPreset);
  registerHandler('DREAM_REMOVE', handleDreamRemove);

  
  registerHandler('POST_CREATE', handlePostCreate);
  registerHandler('POST_LIKE', handlePostLike);
  registerHandler('FOLLOW_USER', handleFollowUser);
  registerHandler('SEARCH', handleSearch);
  registerHandler('DRAFT_SAVE', handleDraftSave);

  
  
  
}


registerAllHandlers();

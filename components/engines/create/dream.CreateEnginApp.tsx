'use client';
import { makeEnginApp } from '@/components/engines/shared';
import ContentEngin from '@/engins/engin.ContentEngin';
export default makeEnginApp({ id:'create', name:'ContentEngin', emoji:'🧱', accentColor:'#f59e0b', backHref:'/daydream/create', backLabel:'Create Daydream', nav:[{href:'/engines/create',label:'Asset Studio',emoji:'🧱'},{href:'/engines/create/editor',label:'Recipes',emoji:'🧬'},{href:'/engines/create/calendar',label:'Rigging',emoji:'🦴'},{href:'/engines/create/queue',label:'Exports',emoji:'📦'}], EnginComponent:ContentEngin });

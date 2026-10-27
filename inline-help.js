/* Keep operator assistance in its task card rather than a global overlay. */
const inlineRender=render;
render=function(){inlineRender();if(s.role!=='operator'||s.page!=='operator'||!['help','flag'].includes(s.drawer))return;const overlay=document.querySelector('.drawer-overlay');const task=document.querySelector('.taskpanel .taskbody');if(!overlay||!task)return;const content=overlay.querySelector('.drawer');content.classList.add('inline-assistance');content.removeAttribute('aria-modal');content.setAttribute('role','region');content.setAttribute('aria-label',s.drawer==='help'?'Get help for this task':'Flag an issue for this task');const close=content.querySelector('[data-action="close"]');if(close)close.textContent='Back to task ×';overlay.remove();task.append(content);};
render();

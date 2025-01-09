// skeleton.ts
import { App, Directive, DirectiveBinding, reactive, h, render, onMounted } from 'vue';
import _ from 'lodash';
const state = reactive<{
  loading: boolean;
  list: HTMLElement[];
}>({
  loading: false,
  list: [],
});
const funcRender = _.debounce(() => {
  document.body.style.overflow = state.loading ? 'hidden' : 'auto';
  const children = state.list.map((el) => {
    const rect = el.getBoundingClientRect();
    return h('div', {
      style: {
        position: 'absolute',
        top: rect.top + 'px',
        left: rect.left + 'px',
        width: rect.width + 'px',
        height: rect.height + 'px',
        borderRadius: getComputedStyle(el).borderRadius,
      },
      class: 'gradient',
    });
  });

  const container = h('div', children);
  render(state.loading ? container : null, document.body);
}, 18.75);
const vSkeleton: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    state.loading = binding.value;
    window.addEventListener('resize', funcRender);
  },
  updated(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    state.loading = binding.value;
    funcRender();
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    state.loading = false;
    window.removeEventListener('resize', funcRender);
  },
};

const vSkeletonItem: Directive = {
  mounted(el: HTMLElement) {
    state.list.push(el);
  },
  unmounted(el: HTMLElement) {
    const i = state.list.indexOf(el);
    if (i !== -1) state.list.splice(i, 1);
  },
};
const clearSkeleton = () => {
  state.loading = false;
  state.list = [];
  funcRender();
};
export default {
  install(app: App) {
    app.directive('skeleton', vSkeleton);
    app.directive('skeleton-item', vSkeletonItem);
  },
};

export { vSkeleton, vSkeletonItem, clearSkeleton };

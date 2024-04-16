export {};
declare module "vue" {
  interface ComponentCustomProperties {
    $media: { isDesktop: boolean; isMq4Extended: boolean };
  }
  // Should be removed and fixed
  export function mergeModels<T extends object, U extends object>(model1: T, model2: U): T & U;
}

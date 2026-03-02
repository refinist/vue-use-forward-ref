import type Child from './Child.vue';
import type { Ref } from 'vue';

export type Demo2Expose = {
  demo2Foo: Ref<number>;
  demo2Bar: Ref<number>;
};
export type Demo2Instance = InstanceType<typeof Child> & Demo2Expose;

import Vue from 'vue';
import './createUrl';
import './urlList';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, {
    listing: any[];
}, {
    refreshList(): Promise<void>;
    shortUrl(url: any): Promise<void>;
}, unknown, Record<never, any>>;
export default _default;

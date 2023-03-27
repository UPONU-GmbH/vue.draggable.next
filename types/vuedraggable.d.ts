export default draggableComponent;
declare const draggableComponent: import("vue").DefineComponent<{
    list: {
        type: ArrayConstructor;
        required: boolean;
        default: any;
    };
    modelValue: {
        type: ArrayConstructor;
        required: boolean;
        default: any;
    };
    itemKey: {
        type: (FunctionConstructor | StringConstructor)[];
        required: boolean;
    };
    clone: {
        type: FunctionConstructor;
        default: (original: any) => any;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    group: {
        type: StringConstructor;
        default: string;
    };
    filter: {
        type: StringConstructor;
        default: string;
    };
    swapClass: {
        type: StringConstructor;
        default: string;
    };
    swap: {
        type: BooleanConstructor;
        default: boolean;
    };
    move: {
        type: FunctionConstructor;
        default: any;
    };
    componentData: {
        type: ObjectConstructor;
        required: boolean;
        default: any;
    };
}, any, {
    error: boolean;
}, {
    realList(): any;
    getKey(): any;
}, {
    getUnderlyingVm(domElement: any): any;
    getUnderlyingPotencialDraggableComponent(htmElement: any): any;
    emitChanges(evt: any): void;
    alterList(onList: any): void;
    spliceList(): void;
    removeAllFromList(indicies: any): void;
    updatePosition(oldIndex: any, newIndex: any): void;
    updatePositions(oldIndicies: any, newIndex: any): void;
    getRelatedContextFromMoveEvent({ to, related }: {
        to: any;
        related: any;
    }): any;
    getVmIndexFromDomIndex(domIndex: any): any;
    onDragStart(evt: any): void;
    onDragAdd(evt: any): void;
    onDragAddMulti(evt: any): void;
    onDragAddSingle(evt: any): void;
    onDragRemove(evt: any): void;
    onDragRemoveMulti(evt: any): void;
    onDragRemoveSingle(evt: any): void;
    onDragUpdate(evt: any): void;
    onDragUpdateMulti(evt: any): void;
    onDragUpdateSingle(evt: any): void;
    computeFutureIndex(relatedContext: any, evt: any): any;
    onDragMove(evt: any, originalEvent: any): any;
    onDragEnd(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag: string;
} & {
    move?: Function;
    clone?: Function;
    componentData?: Record<string, any>;
    list?: unknown[];
    modelValue?: unknown[];
    itemKey?: string | Function;
    group?: string;
    filter?: string;
    swapClass?: string;
    swap?: boolean;
}>, {
    move: Function;
    clone: Function;
    componentData: Record<string, any>;
    tag: string;
    group: string;
    filter: string;
    swapClass: string;
    swap: boolean;
    list: unknown[];
    modelValue: unknown[];
}>;

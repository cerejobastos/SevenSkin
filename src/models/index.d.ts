import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHeartRates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeartRates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minimum?: string | null;
  readonly maximum?: string | null;
  readonly meanAverage?: string | null;
  readonly dateTim?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeartRates = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HeartRates, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly minimum?: string | null;
  readonly maximum?: string | null;
  readonly meanAverage?: string | null;
  readonly dateTim?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HeartRates = LazyLoading extends LazyLoadingDisabled ? EagerHeartRates : LazyHeartRates

export declare const HeartRates: (new (init: ModelInit<HeartRates>) => HeartRates) & {
  copyOf(source: HeartRates, mutator: (draft: MutableModel<HeartRates>) => MutableModel<HeartRates> | void): HeartRates;
}
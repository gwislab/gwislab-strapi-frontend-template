import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  I18NLocaleCode: { input: any; output: any };
  JSON: { input: any; output: any };
  PageContentDynamicZoneInput: { input: any; output: any };
};

export type BooleanFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["Boolean"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["Boolean"]["input"]>[]>;
  contains?: InputMaybe<Scalars["Boolean"]["input"]>;
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["Boolean"]["input"]>[]>;
  lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  nei?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["Boolean"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["Boolean"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ComponentComponentsFooter = {
  __typename?: "ComponentComponentsFooter";
  appName?: Maybe<Scalars["String"]["output"]>;
  copyRightText?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  links?: Maybe<Maybe<ComponentComponentsLink>[]>;
  logo?: Maybe<UploadFile>;
};

export type ComponentComponentsFooterLinksArgs = {
  filters?: InputMaybe<ComponentComponentsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ComponentComponentsFooterInput = {
  appName?: InputMaybe<Scalars["String"]["input"]>;
  copyRightText?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  links?: InputMaybe<InputMaybe<ComponentComponentsLinkInput>[]>;
  logo?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentComponentsHeader = {
  __typename?: "ComponentComponentsHeader";
  id: Scalars["ID"]["output"];
  logo?: Maybe<UploadFile>;
  titles?: Maybe<Maybe<ComponentComponentsTitle>[]>;
};

export type ComponentComponentsHeaderTitlesArgs = {
  filters?: InputMaybe<ComponentComponentsTitleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ComponentComponentsHeaderInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  logo?: InputMaybe<Scalars["ID"]["input"]>;
  titles?: InputMaybe<InputMaybe<ComponentComponentsTitleInput>[]>;
};

export type ComponentComponentsLink = {
  __typename?: "ComponentComponentsLink";
  id: Scalars["ID"]["output"];
  isExternal?: Maybe<Scalars["Boolean"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentComponentsLinkFiltersInput = {
  and?: InputMaybe<InputMaybe<ComponentComponentsLinkFiltersInput>[]>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsLinkFiltersInput>;
  or?: InputMaybe<InputMaybe<ComponentComponentsLinkFiltersInput>[]>;
};

export type ComponentComponentsLinkInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isExternal?: InputMaybe<Scalars["Boolean"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentComponentsMetaData = {
  __typename?: "ComponentComponentsMetaData";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  metaTags?: Maybe<Maybe<ComponentComponentsMetaTag>[]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentComponentsMetaDataMetaTagsArgs = {
  filters?: InputMaybe<ComponentComponentsMetaTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ComponentComponentsMetaDataFiltersInput = {
  and?: InputMaybe<InputMaybe<ComponentComponentsMetaDataFiltersInput>[]>;
  description?: InputMaybe<StringFilterInput>;
  metaTags?: InputMaybe<ComponentComponentsMetaTagFiltersInput>;
  not?: InputMaybe<ComponentComponentsMetaDataFiltersInput>;
  or?: InputMaybe<InputMaybe<ComponentComponentsMetaDataFiltersInput>[]>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentComponentsMetaDataInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  metaTags?: InputMaybe<InputMaybe<ComponentComponentsMetaTagInput>[]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentComponentsMetaTag = {
  __typename?: "ComponentComponentsMetaTag";
  content?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentComponentsMetaTagFiltersInput = {
  and?: InputMaybe<InputMaybe<ComponentComponentsMetaTagFiltersInput>[]>;
  content?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsMetaTagFiltersInput>;
  or?: InputMaybe<InputMaybe<ComponentComponentsMetaTagFiltersInput>[]>;
};

export type ComponentComponentsMetaTagInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentComponentsTitle = {
  __typename?: "ComponentComponentsTitle";
  id: Scalars["ID"]["output"];
  isButton?: Maybe<Scalars["Boolean"]["output"]>;
  isExternal?: Maybe<Scalars["Boolean"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  subTitles?: Maybe<Maybe<ComponentComponentsLink>[]>;
};

export type ComponentComponentsTitleSubTitlesArgs = {
  filters?: InputMaybe<ComponentComponentsLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ComponentComponentsTitleFiltersInput = {
  and?: InputMaybe<InputMaybe<ComponentComponentsTitleFiltersInput>[]>;
  isButton?: InputMaybe<BooleanFilterInput>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentComponentsTitleFiltersInput>;
  or?: InputMaybe<InputMaybe<ComponentComponentsTitleFiltersInput>[]>;
  subTitles?: InputMaybe<ComponentComponentsLinkFiltersInput>;
};

export type ComponentComponentsTitleInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isButton?: InputMaybe<Scalars["Boolean"]["input"]>;
  isExternal?: InputMaybe<Scalars["Boolean"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  subTitles?: InputMaybe<InputMaybe<ComponentComponentsLinkInput>[]>;
};

export type ComponentPagesMap = {
  __typename?: "ComponentPagesMap";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["DateTime"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["DateTime"]["input"]>[]>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["DateTime"]["input"]>[]>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  nei?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["DateTime"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["DateTime"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DeleteMutationResponse = {
  __typename?: "DeleteMutationResponse";
  documentId: Scalars["ID"]["output"];
};

export type Error = {
  __typename?: "Error";
  code: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["Float"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["Float"]["input"]>[]>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["Float"]["input"]>[]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  nei?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["Float"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["Float"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph =
  | ComponentComponentsFooter
  | ComponentComponentsHeader
  | ComponentComponentsLink
  | ComponentComponentsMetaData
  | ComponentComponentsMetaTag
  | ComponentComponentsTitle
  | ComponentPagesMap
  | HeaderFooter
  | I18NLocale
  | Page
  | ReviewWorkflowsWorkflow
  | ReviewWorkflowsWorkflowStage
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type HeaderFooter = {
  __typename?: "HeaderFooter";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  footer?: Maybe<ComponentComponentsFooter>;
  header?: Maybe<ComponentComponentsHeader>;
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<HeaderFooter>[];
  localizations_connection?: Maybe<HeaderFooterRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type HeaderFooterInput = {
  footer?: InputMaybe<ComponentComponentsFooterInput>;
  header?: InputMaybe<ComponentComponentsHeaderInput>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type HeaderFooterRelationResponseCollection = {
  __typename?: "HeaderFooterRelationResponseCollection";
  nodes: HeaderFooter[];
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<I18NLocale>[];
  localizations_connection?: Maybe<I18NLocaleRelationResponseCollection>;
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleLocalizationsArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type I18NLocaleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  nodes: I18NLocale[];
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<I18NLocaleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<InputMaybe<I18NLocaleFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: "I18NLocaleRelationResponseCollection";
  nodes: I18NLocale[];
};

export type IdFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  nei?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["Int"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["Int"]["input"]>[]>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["Int"]["input"]>[]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  nei?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["Int"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["Int"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["JSON"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["JSON"]["input"]>[]>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["JSON"]["input"]>[]>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  nei?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["JSON"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["JSON"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createPage?: Maybe<Page>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteHeaderFooter?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateHeaderFooter?: Maybe<HeaderFooter>;
  updatePage?: Maybe<Page>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeletePageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};

export type MutationUpdateHeaderFooterArgs = {
  data: HeaderFooterInput;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type Page = {
  __typename?: "Page";
  content?: Maybe<Maybe<PageContentDynamicZone>[]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<Page>[];
  localizations_connection?: Maybe<PageRelationResponseCollection>;
  metaData?: Maybe<ComponentComponentsMetaData>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type PageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type PageContentDynamicZone = ComponentPagesMap | Error;

export type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  nodes: Page[];
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<InputMaybe<PageFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  metaData?: InputMaybe<ComponentComponentsMetaDataFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<InputMaybe<PageFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  content?: InputMaybe<Scalars["PageContentDynamicZoneInput"]["input"][]>;
  metaData?: InputMaybe<ComponentComponentsMetaDataInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type PageRelationResponseCollection = {
  __typename?: "PageRelationResponseCollection";
  nodes: Page[];
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PublicationStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED",
}

export type Query = {
  __typename?: "Query";
  headerFooter?: Maybe<HeaderFooter>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Maybe<I18NLocale>[];
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<Page>;
  pages: Maybe<Page>[];
  pages_connection?: Maybe<PageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Maybe<ReviewWorkflowsWorkflowStage>[];
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Maybe<ReviewWorkflowsWorkflow>[];
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Maybe<UploadFile>[];
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Maybe<UsersPermissionsRole>[];
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Maybe<UsersPermissionsUser>[];
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryHeaderFooterArgs = {
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
  documentId: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]["input"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: "ReviewWorkflowsWorkflow";
  contentTypes: Scalars["JSON"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<ReviewWorkflowsWorkflow>[];
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowRelationResponseCollection>;
  name: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  stages: Maybe<ReviewWorkflowsWorkflowStage>[];
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ReviewWorkflowsWorkflowLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowEntityResponseCollection";
  nodes: ReviewWorkflowsWorkflow[];
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>[]>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars["JSON"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  stages?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowRelationResponseCollection";
  nodes: ReviewWorkflowsWorkflow[];
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: "ReviewWorkflowsWorkflowStage";
  color?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<ReviewWorkflowsWorkflowStage>[];
  localizations_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageLocalizationsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowStageLocalizations_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageEntityResponseCollection";
  nodes: ReviewWorkflowsWorkflowStage[];
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>[]>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  workflow?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageRelationResponseCollection";
  nodes: ReviewWorkflowsWorkflowStage[];
};

export type StringFilterInput = {
  and?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  between?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nei?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  ext?: Maybe<Scalars["String"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<UploadFile>[];
  localizations_connection?: Maybe<UploadFileRelationResponseCollection>;
  mime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  related?: Maybe<Maybe<GenericMorph>[]>;
  size: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileLocalizationsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UploadFileLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  nodes: UploadFile[];
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UploadFileFiltersInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<InputMaybe<UploadFileFiltersInput>[]>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  nodes: UploadFile[];
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  provider?: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]["output"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<UsersPermissionsPermission>[];
  localizations_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsPermissionLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsPermissionFiltersInput>[]>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  nodes: UsersPermissionsPermission[];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentId: Scalars["ID"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<UsersPermissionsRole>[];
  localizations_connection?: Maybe<UsersPermissionsRoleRelationResponseCollection>;
  name: Scalars["String"]["output"];
  permissions: Maybe<UsersPermissionsPermission>[];
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  users: Maybe<UsersPermissionsUser>[];
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRoleLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRoleLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  nodes: UsersPermissionsRole[];
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsRoleFiltersInput>[]>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<InputMaybe<Scalars["ID"]["input"]>[]>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: "UsersPermissionsRoleRelationResponseCollection";
  nodes: UsersPermissionsRole[];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  email: Scalars["String"]["output"];
  locale?: Maybe<Scalars["String"]["output"]>;
  localizations: Maybe<UsersPermissionsUser>[];
  localizations_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  provider?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsUserLocalizationsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsUserLocalizations_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<InputMaybe<Scalars["String"]["input"]>[]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  nodes: UsersPermissionsUser[];
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<UsersPermissionsUserFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<InputMaybe<UsersPermissionsUserFiltersInput>[]>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmationToken?: InputMaybe<Scalars["String"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  nodes: UsersPermissionsUser[];
};

export type LinkFragmentFragment = {
  __typename?: "ComponentComponentsLink";
  id: string;
  label?: string | null;
  link?: string | null;
  isExternal?: boolean | null;
};

export type TitleFragmentFragment = {
  __typename?: "ComponentComponentsTitle";
  id: string;
  label?: string | null;
  link?: string | null;
  isButton?: boolean | null;
  isExternal?: boolean | null;
  subTitles?:
    | ({
        __typename?: "ComponentComponentsLink";
        id: string;
        label?: string | null;
        link?: string | null;
        isExternal?: boolean | null;
      } | null)[]
    | null;
};

export type HeaderFragmentFragment = {
  __typename?: "ComponentComponentsHeader";
  id: string;
  logo?: {
    __typename?: "UploadFile";
    alternativeText?: string | null;
    caption?: string | null;
    documentId: string;
    ext?: string | null;
    height?: number | null;
    locale?: string | null;
    mime: string;
    name: string;
    previewUrl?: string | null;
    provider: string;
    size: number;
    url: string;
    width?: number | null;
  } | null;
  titles?:
    | ({
        __typename?: "ComponentComponentsTitle";
        id: string;
        label?: string | null;
        link?: string | null;
        isButton?: boolean | null;
        isExternal?: boolean | null;
        subTitles?:
          | ({
              __typename?: "ComponentComponentsLink";
              id: string;
              label?: string | null;
              link?: string | null;
              isExternal?: boolean | null;
            } | null)[]
          | null;
      } | null)[]
    | null;
};

export type FooterFragmentFragment = {
  __typename?: "ComponentComponentsFooter";
  id: string;
  appName?: string | null;
  copyRightText?: string | null;
  logo?: {
    __typename?: "UploadFile";
    alternativeText?: string | null;
    caption?: string | null;
    documentId: string;
    ext?: string | null;
    height?: number | null;
    locale?: string | null;
    mime: string;
    name: string;
    previewUrl?: string | null;
    provider: string;
    size: number;
    url: string;
    width?: number | null;
  } | null;
  links?:
    | ({
        __typename?: "ComponentComponentsLink";
        id: string;
        label?: string | null;
        link?: string | null;
        isExternal?: boolean | null;
      } | null)[]
    | null;
};

export type ImageFragmentFragment = {
  __typename?: "UploadFile";
  alternativeText?: string | null;
  caption?: string | null;
  documentId: string;
  ext?: string | null;
  height?: number | null;
  locale?: string | null;
  mime: string;
  name: string;
  previewUrl?: string | null;
  provider: string;
  size: number;
  url: string;
  width?: number | null;
};

export type MapSectionFragment = {
  __typename?: "ComponentPagesMap";
  id: string;
  title?: string | null;
  description?: string | null;
};

export type ErrorSectionFragment = {
  __typename?: "Error";
  code: string;
  message?: string | null;
};

type DynamicZoneContent_ComponentPagesMap_Fragment = {
  __typename: "ComponentPagesMap";
  id: string;
  title?: string | null;
  description?: string | null;
};

type DynamicZoneContent_Error_Fragment = {
  __typename: "Error";
  code: string;
  message?: string | null;
};

export type DynamicZoneContentFragment =
  | DynamicZoneContent_ComponentPagesMap_Fragment
  | DynamicZoneContent_Error_Fragment;

export type GetHeaderFooterQueryVariables = Exact<{ [key: string]: never }>;

export type GetHeaderFooterQuery = {
  __typename?: "Query";
  headerFooter?: {
    __typename?: "HeaderFooter";
    documentId: string;
    createdAt?: any | null;
    updatedAt?: any | null;
    publishedAt?: any | null;
    locale?: string | null;
    header?: {
      __typename?: "ComponentComponentsHeader";
      id: string;
      logo?: {
        __typename?: "UploadFile";
        alternativeText?: string | null;
        caption?: string | null;
        documentId: string;
        ext?: string | null;
        height?: number | null;
        locale?: string | null;
        mime: string;
        name: string;
        previewUrl?: string | null;
        provider: string;
        size: number;
        url: string;
        width?: number | null;
      } | null;
      titles?:
        | ({
            __typename?: "ComponentComponentsTitle";
            id: string;
            label?: string | null;
            link?: string | null;
            isButton?: boolean | null;
            isExternal?: boolean | null;
            subTitles?:
              | ({
                  __typename?: "ComponentComponentsLink";
                  id: string;
                  label?: string | null;
                  link?: string | null;
                  isExternal?: boolean | null;
                } | null)[]
              | null;
          } | null)[]
        | null;
    } | null;
    footer?: {
      __typename?: "ComponentComponentsFooter";
      id: string;
      appName?: string | null;
      copyRightText?: string | null;
      logo?: {
        __typename?: "UploadFile";
        alternativeText?: string | null;
        caption?: string | null;
        documentId: string;
        ext?: string | null;
        height?: number | null;
        locale?: string | null;
        mime: string;
        name: string;
        previewUrl?: string | null;
        provider: string;
        size: number;
        url: string;
        width?: number | null;
      } | null;
      links?:
        | ({
            __typename?: "ComponentComponentsLink";
            id: string;
            label?: string | null;
            link?: string | null;
            isExternal?: boolean | null;
          } | null)[]
        | null;
    } | null;
  } | null;
};

export type GetPagesQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetPagesQuery = {
  __typename?: "Query";
  pages: ({
    __typename?: "Page";
    locale?: string | null;
    documentId: string;
    metaData?: {
      __typename?: "ComponentComponentsMetaData";
      id: string;
      title?: string | null;
      description?: string | null;
      slug?: string | null;
      metaTags?:
        | ({
            __typename?: "ComponentComponentsMetaTag";
            id: string;
            name?: string | null;
            content?: string | null;
          } | null)[]
        | null;
    } | null;
    content?:
      | (
          | {
              __typename: "ComponentPagesMap";
              id: string;
              title?: string | null;
              description?: string | null;
            }
          | { __typename: "Error"; code: string; message?: string | null }
          | null
        )[]
      | null;
  } | null)[];
};

export const ImageFragmentFragmentDoc = gql`
  fragment ImageFragment on UploadFile {
    alternativeText
    caption
    documentId
    ext
    height
    locale
    mime
    name
    previewUrl
    provider
    size
    url
    width
  }
`;
export const LinkFragmentFragmentDoc = gql`
  fragment LinkFragment on ComponentComponentsLink {
    id
    label
    link
    isExternal
  }
`;
export const TitleFragmentFragmentDoc = gql`
  fragment TitleFragment on ComponentComponentsTitle {
    id
    label
    link
    isButton
    isExternal
    subTitles {
      ...LinkFragment
    }
  }
  ${LinkFragmentFragmentDoc}
`;
export const HeaderFragmentFragmentDoc = gql`
  fragment HeaderFragment on ComponentComponentsHeader {
    id
    logo {
      ...ImageFragment
    }
    titles {
      ...TitleFragment
    }
  }
  ${ImageFragmentFragmentDoc}
  ${TitleFragmentFragmentDoc}
`;
export const FooterFragmentFragmentDoc = gql`
  fragment FooterFragment on ComponentComponentsFooter {
    id
    appName
    copyRightText
    logo {
      ...ImageFragment
    }
    links {
      ...LinkFragment
    }
  }
  ${ImageFragmentFragmentDoc}
  ${LinkFragmentFragmentDoc}
`;
export const MapSectionFragmentDoc = gql`
  fragment MapSection on ComponentPagesMap {
    id
    title
    description
  }
`;
export const ErrorSectionFragmentDoc = gql`
  fragment ErrorSection on Error {
    code
    message
  }
`;
export const DynamicZoneContentFragmentDoc = gql`
  fragment DynamicZoneContent on PageContentDynamicZone {
    __typename
    ...MapSection
    ...ErrorSection
  }
  ${MapSectionFragmentDoc}
  ${ErrorSectionFragmentDoc}
`;
export const GetHeaderFooterDocument = gql`
  query GetHeaderFooter {
    headerFooter {
      documentId
      header {
        ...HeaderFragment
      }
      footer {
        ...FooterFragment
      }
      createdAt
      updatedAt
      publishedAt
      locale
    }
  }
  ${HeaderFragmentFragmentDoc}
  ${FooterFragmentFragmentDoc}
`;

/**
 * __useGetHeaderFooterQuery__
 *
 * To run a query within a React component, call `useGetHeaderFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeaderFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeaderFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeaderFooterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHeaderFooterQuery,
    GetHeaderFooterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHeaderFooterQuery, GetHeaderFooterQueryVariables>(
    GetHeaderFooterDocument,
    options,
  );
}
export function useGetHeaderFooterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHeaderFooterQuery,
    GetHeaderFooterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetHeaderFooterQuery,
    GetHeaderFooterQueryVariables
  >(GetHeaderFooterDocument, options);
}
export function useGetHeaderFooterSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetHeaderFooterQuery,
        GetHeaderFooterQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetHeaderFooterQuery,
    GetHeaderFooterQueryVariables
  >(GetHeaderFooterDocument, options);
}
export type GetHeaderFooterQueryHookResult = ReturnType<
  typeof useGetHeaderFooterQuery
>;
export type GetHeaderFooterLazyQueryHookResult = ReturnType<
  typeof useGetHeaderFooterLazyQuery
>;
export type GetHeaderFooterSuspenseQueryHookResult = ReturnType<
  typeof useGetHeaderFooterSuspenseQuery
>;
export type GetHeaderFooterQueryResult = Apollo.QueryResult<
  GetHeaderFooterQuery,
  GetHeaderFooterQueryVariables
>;
export const GetPagesDocument = gql`
  query GetPages($slug: String) {
    pages(filters: { metaData: { slug: { eq: $slug } } }) {
      metaData {
        id
        title
        description
        metaTags {
          id
          name
          content
        }
        slug
      }
      content {
        ...DynamicZoneContent
      }
      locale
      documentId
    }
  }
  ${DynamicZoneContentFragmentDoc}
`;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPagesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPagesQuery, GetPagesQueryVariables>(
    GetPagesDocument,
    options,
  );
}
export function useGetPagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPagesQuery,
    GetPagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(
    GetPagesDocument,
    options,
  );
}
export function useGetPagesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPagesQuery, GetPagesQueryVariables>(
    GetPagesDocument,
    options,
  );
}
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<
  typeof useGetPagesLazyQuery
>;
export type GetPagesSuspenseQueryHookResult = ReturnType<
  typeof useGetPagesSuspenseQuery
>;
export type GetPagesQueryResult = Apollo.QueryResult<
  GetPagesQuery,
  GetPagesQueryVariables
>;

"use client";

import React from "react";

import ErrorContent from "../error-content";
import MapSection from "./sections/map";
import { DynamicZoneContentFragment } from "~/graphql/generated/schema";

interface IRenderRightSectionFromContentProps {
  content: DynamicZoneContentFragment;
}

const RenderRightSectionFromContent = ({
  content
}: IRenderRightSectionFromContentProps) => {
  switch (content.__typename) {
    case "ComponentPagesMap":
      return <MapSection />;

    default:
      return <ErrorContent title="404" description="This page is not found" />;
  }
};

interface IRenderPageComponentsProps {
  contents: DynamicZoneContentFragment[];
}

const RenderPageComponents = ({ contents }: IRenderPageComponentsProps) => {
  return (
    <div>
      {contents?.map((content) => (
        <RenderRightSectionFromContent
          key={content?.__typename}
          content={content as DynamicZoneContentFragment}
        />
      ))}
    </div>
  );
};

export default RenderPageComponents;

/**
 * @format
 */

import "react-native";
import React from "react";

// Note: import explicitly to use the types shiped with jest.
// eslint-disable-next-line import/no-extraneous-dependencies
import {it} from "@jest/globals";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

import AppRoot from "../src";

it("renders correctly", () => {
	renderer.create(<AppRoot />);
});
/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { _t } from "../../../../../languageHandler";
import SettingsTab from "../SettingsTab";
import { SettingsSection } from "../../shared/SettingsSection";

const WidgetsUserSettingsTab: React.FC = () => {
    return (
        <SettingsTab>
            <SettingsSection heading={_t("settings|widgets|title")}>
                <p>{_t("settings|widgets|coming_soon")}</p>
            </SettingsSection>
        </SettingsTab>
    );
};

export default WidgetsUserSettingsTab;

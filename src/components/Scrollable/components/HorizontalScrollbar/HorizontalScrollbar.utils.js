/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {getThumbPosition, getThumbLength} from '../../Scrollable.utils';

export const onUpdate = (track, thumb, container) => {
    const {clientWidth, scrollWidth, scrollLeft} = container;
    thumb.style.width = `${getThumbLength(clientWidth, scrollWidth)}px`;
    thumb.style.left = `${getThumbPosition(clientWidth, clientWidth, scrollWidth, scrollLeft)}px`;
};

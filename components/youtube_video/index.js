// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {getCurrentChannelId} from 'mattermost-redux/selectors/entities/channels';

import YoutubeVideo from './youtube_video.jsx';

const mapStateToProps = (state) => ({
    currentChannelId: getCurrentChannelId(state)
});

export default connect(mapStateToProps)(YoutubeVideo);

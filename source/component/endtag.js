import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { CommonStyles } from '../style';

class EndTag extends Component {

	constructor(props) {
	    super(props);
	    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
        let { text = "— END —" } = this.props;
	    return (
	    	<View style={ [CommonStyles.p_a_4] }>
                <Text style={ [CommonStyles.text_center, CommonStyles.text_gray] }>
                    { text }
                </Text>
            </View>
	    )
	}
}

export default EndTag;


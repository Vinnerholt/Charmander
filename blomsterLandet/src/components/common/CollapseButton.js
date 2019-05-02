import React from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

onst CollapseButton = (header, body) => {
    const {
        bottomButtonStyle, bottomButtonTextStyle
    } = styles;

    return (
        <Collapse style={bottomButtonStyle}>
            <CollapseHeader>
                <View>
                    <Text style={bottomButtonTextStyle}>{header}</Text>
                </View>
            </CollapseHeader>

            <CollapseBody>
                <Text style={{ paddingBottom: 10 }}>{body}</Text>
            </CollapseBody>
        </Collapse>
    );
};

const styles = {
bottomButtonStyle: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3e5f36',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#050',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
},
bottomButtonTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    color: '#3e5f36',
    paddingTop: 10,
    paddingBottom: 10
},
},


export default CollapseButton;
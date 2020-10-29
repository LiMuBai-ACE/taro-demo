import React, { } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'

import './index.scss'

const Home = (props: any) => {
    console.log(props,'=====>')


    return (
        <View className='index'>
            Home
        </View>
    )

}
export default connect(
    ({ home, loading }) => ({ ...home, loading }),
)(Home)

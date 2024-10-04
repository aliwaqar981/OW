import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {COLORS} from '../../themes';

const Chart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
          datasets: [
            {
              data: [70, 40, 80, 40, 99, 30, 90, 20],
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // from react-native
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `#FF3D00`,
          labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
          style: {
            borderRadius: 16,
            marginVertical: 8,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '4',
            stroke: COLORS.red,
            fill: '#fff',
          },
          propsForBackgroundLines: {
            strokeDasharray: '5, 2',
            stroke: '#CCCCCC',
          },
          strokeWidth: 4,
        }}
        hidePointsAtIndex={[0, 1, 2, 3, 4, 5, 6]}
        withVerticalLines={false}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginHorizontal: 10,
        }}
        yLabelsOffset={30}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});

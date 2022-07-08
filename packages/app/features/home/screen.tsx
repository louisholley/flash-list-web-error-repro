import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { Text, useSx, View, H1 } from 'dripsy'

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
]

const MyList = () => {
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  )
}

export function HomeScreen() {
  return (
    <View
      sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
    >
      <H1 sx={{ fontWeight: '800' }}>FlashList demo.</H1>
      <MyList />
    </View>
  )
}

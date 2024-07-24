import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import {KEY_BANNER} from "@env"

const adUnitId = __DEV__ ? TestIds.BANNER : KEY_BANNER;

const BannerAds = () => {
  return (
    <View>
      <BannerAd  
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true, 
        }}
      />
    </View >
  );
};

export default BannerAds;
import React, { useEffect, useRef } from "react";
import { Animated, TextStyle } from "react-native";

interface Props {
  children: any;
  style?: TextStyle;
  colors?: string[];
  duration?: number;
}

export const AnimatedColorText = ({
  children,
  style = {},
  colors = ["#ff0000", "#00ff00", "#0000ff"],
  duration = 2000,
}: Props) => {

  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const animatedColor = anim.interpolate({
    inputRange: colors.map((_, i) => i / (colors.length - 1)),
    outputRange: colors,
  });

  return (
    <Animated.Text style={[style, { color: animatedColor }]}>
      {children}
    </Animated.Text>
  );
};

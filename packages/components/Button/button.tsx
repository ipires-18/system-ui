import React from "react"; 

import { 
	StyleSheet,
	Text, 
	Pressable, 
} from "react-native";

import { 
	ButtonType, 
} from "./button.types";

export const Button: React.FC<ButtonType>= ({
	label,  
	onPress, 
}) => {
	return (
		<Pressable style={style.baseButton} onPress={onPress}>
			<Text>{label}</Text>
		</Pressable>
	);
};

const style = StyleSheet.create({
	baseButton: {
		height: 52, 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		borderRadius: 4, 
		flexDirection: 'row', 
		backgroundColor: '#efefef', 
		padding: 16
	}, 
})
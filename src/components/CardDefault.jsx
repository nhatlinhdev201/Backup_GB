import { View } from "react-native"

const CardDefault = ({ title = ">Hoặc chờ phiên bản tiếp theo để trò chuyện cùng nhau nhé !" }) => {
  return (
    <View style={MainStyles.tabContainerDefault}>
      <Text style={MainStyles.textDefault}>{title}</Text>
    </View>
  )
};

export default CardDefault;
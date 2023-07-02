import {FlatList, StyleSheet, Text, View,Image, useColorScheme,Dimensions, ListRenderItem} from 'react-native';
import React from 'react';


//getting screen dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const discountedList = [
  {
    id: 1,
    restaurant: 'Pizza Palace',
    discount: '20% off on all pizzas',
    validUntil: '2023-08-31',
  },
  {
    id: 2,
    restaurant: 'Burger Joint',
    discount: 'Buy one burger, get one free',
    validUntil: '2023-07-15',
  },
  {
    id: 3,
    restaurant: 'Pasta Paradise',
    discount: '50% off on all pasta dishes',
    validUntil: '2023-09-30',
  },
  {
    id: 4,
    restaurant: 'Sushi Delight',
    discount: '15% off on all sushi rolls',
    validUntil: '2023-10-31',
  },
  {
    id: 5,
    restaurant: 'Taco Haven',
    discount: 'Free drink with any taco order',
    validUntil: '2023-07-31',
  },
  // Add more discounted details for other restaurants
];

 


const Discounted = () => {
  
     //dark mode scheme
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#000000';


const imageLink='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAAmVBMVEX39/faRSb4///4+/v4/f7ZQyPZQiHZQB74+vvZPhvZOxXbMgDZPxz39/jZPRjZORH28vH16efaNwraNQX27u3cMAD04t/16+n04+DxycPy0s3ldWLvt67lblnvv7jtraPz29fngXDww7zvq6Drmo3iVDjso5jiWT7jYEjqkYPxzsjrm47gTjDjaVPpiXrnfGrojX7hYkzohXbXQ4ioAAAXEklEQVR4nO1di3ayOhOFJEAgCAjeRcX7pVpr3//hfpAkBOQS+9mW86/utc5ZX1vEMExmJpM9E0X5wx/+8Ic//OEPf/jDH/7wn0EH41fdCuPOq271s8AIYGU4GvUwRPCfxAERwkpvNBoqEPzbnX4BEI0W1zNJYB0+F5GCvvgEECmTxXLvJncKtsvFCPyXRIHBeEZcW1Pv0E2XnD/G+HlZYKSsPlXimjq9k+0G08l/RxSoOyOGmoPmkPNb97lHgGCw0QNTy9/JJtce+q6RvxYgJLb6CM0iy4G8VkAQTYmjldzIdMfgO8f/KoA3UjL69BHIdQCkjD9GsRjKxHkXKVn8ByRRI4e7KI4yio26y0oxJOi3XxLxvMjenOFYlmPk1dtyFgDW3wPCne/kdcC+30mQxKnhHr8NOAjYc+u+Od3sdpvp2fdtQRhacBjUKgWYnN2cEHz/fH2L7zSzfJ390um123egC3tt/m2sABQDgG54zR4hhkHWsPKFQuXYF66NxXmdd0F6J2W+ZyJyrq12HXDOJgZZZw4CY9AL90R4PP82qngOEG0FdTDIIfRAFqdDuOFfMGmzSqAzfVoyL1gzBMcHQRSGX7zgjg5YCxfp5DJGBdUBCyoJ49ZiewlXAX3j64dRdiAab31uKzTy/rhugN40EGzJ/lRiVsHRZSrRXnsJqIUwLqVvC8OFk3kD9zAsPAmKztmfLSMs9y5on+qMuWytSuARVdt+VPGywPBKuFLY5iT3KGCeTYtYYariDXii3+J7r36AVwEtUq21p5XvCoOVZWY2IBQuBLtMRo52qo5AwSGVl79q69wAs3RmBOOaEaKeYAfIhkkCwyX/tUaWXo1LgKGfzo33tnpQL42bNLX2Khwbfj4FgmVqMqFy4V7T8MPa2d/ppYLQtrCdSSs4SSev+dnwpkCk8unhzpRYEri352bS2tcHnpnm+d12hhIwTF+qGzaND/dmPn/umwdh98yXWGSpNE19tLOap+AvAh3Tt0qixheF0ZGvzcy9N9JZYK71HyOQx0+PUzG663YaCTS9P45m9yQujg0F8xH2gcWj8cpiJREc4C6zlu2MJGAa6eh7qfcExnwdpjORGEYk9VlPvX/CmLZTI5Q082DM5N4TiixhGXZXjfNIbtLT4FI/tNNGeL6c02CAmWm4w9nXRQ8iaCivnb8+2G8E7qb2z9nIKiwcboV8nHVRZL0huqafc7461m8FHqSCsHbSMxd6Fz47jKm0HBT0mcYh7Vxt4IgKQt6pYUUUhPyEBx+pIMj/iyDgRcjRule5TL+S5CRoxCLjqH8czwsCXMUkrep/yIYFXCPaKYhnbQTY+GoORCKqvKPlNuJJr8Gzj6rGAioyl/so8xpuKwWh9OjiUy7wRWMmB33PQmwtqEpt5UGXn5r2bwP+LngsPyXzWuGArTV0pzvw+b+LecxS0ByVtlXamZA43x9Hl8mzY49rgR/BTDuMvcT3dOCWflM7Q2yYvid9KzE8eGGpGTKOFQjxHVNLZgfLM1q96GLLcKPZhPHNCZXu8IM3lrEMdo0K1fZlOHqnTq0xg5YpgM+yt2DJRTNues8sJ/hEMP+j4Bm0pi0oGPGJMEXM3OGbyYxG02Icz1ON8OftzFmy8TXlLLGn6tw0crOPe9lvG56PS7ylJAmmsU0RFZjSFYbmdoUnEfTks37uo2UaTwUtzWJ3hqlGNBhzsGN2kUxyF4KMU1C/sUHdk6a2M7BUWCARxzk1wBP+uEUiVLb4CAZ175pGblIBy6+AbbyQYXXA1/F0nU2AB8WBM2ow9W3dlh+dQ6b0avWngTYONWLVj8ENhL5XIMYYcsQ/4B5bf7k1IQLfSFq001ZmbqMyI9HB2ZLTHnndURRFE4ooGoyGysRi82ZeyU0FH46cm/414EFqBu1imIwhRghAbzgYswdNuMQpgjvoDzyZqxmnUc9DACFYZNYAyhTxW5mWuQOnxGnN4ILAMCHDjSbh7nO2V31SSMXUQAuIqx6mx8U86kIAUMYo8widW201EZm17I9wwoADAEer3fJg+IFvmYZeRqyuF4ZuOG78YfX2sR6PUCoNfEr1zmmtrcxCPjcESInCjz0hvmU/L4BHgZiuT4LbcR4pCPAvaWc4lYC9LGP6dnGzMotXQXd84sx2t/S2d7VrKbDCSJDOi2XAoRl0x1RTWzszMICTs9Q00DRdNwzbdKwcHMe0DV1yJum3CWxhLU8HAm++DAKZhzBdW90eLtPlx+Ztt9ut74j/8bb5+LzODtv4AqP5LqoeBMu51y5ZQNALp4FfVWGh25Yf8ADCuXpe7FBij3hnmosACYU9jjd6M34rN0jMbcWNbT+YzntNVQ8/BQyU8dX1S19ibO0DYh2Wu/mE0n3iSd5rGHhHgV2XhdqTyXy3vDnErzC9tu8ux1+uIXwhIBhttKBEF5Lavv72M/b/ShxWQnBjdPWVRH4NhHSpbsxAHJJBZTRef277gWuXzD0zUJ+tm3s5EBzP+qUVaNr2czHxYl1PI0KwoArhyDGoAZscJLzL7R6hepPFstQaa1Z/+sDj/0EgJdwW6xrZ0NR4bZGNDDNd1xy5ZAruUpXQbKFUB8bhuln6fapB9nPld3K5SFmc/cK8NVy2bCK5pTi40vHL7m4KKpRbkMMxFZBJ3MJ368E2rC4M+jZAEJ79vJoabv+yGNEA2DkK48dsJ8uspqs/fMGB6lquVIftg7vhYH3oF9ys7m9XP+xCMDjt8zGD4fqzsAcQy+BqppiXpQlqzZVPtzK6RYGuSBUiGMbTpLu4BHm90MkhkqabvABoeBUrtGJjFVzCIbhzxFHKgRQLbNCObt74iydmMThaD59iMyOtjMEwlsUhXy6s99+9nzIVHRA6YlmmHqibAWBMeZavcz7YeNgOnSwVlUNnBrbHXjJYsplBpRx75uho50yVpcuwd18A6E2J8A5scpuLAQ2fGwbTCG4p+88V5vGSQYvbG5q/VvtCehgiL9yLzksjn4289hcATUR1MMm12MYAUVfPuPO89MipSMhWl+rwYILyR1hS1JjlVQuC00wsobbOTZUO/w4QCtbBJsvBg5lGb+ncpsVnHUxTjIKGi8+QtAuh/y+C5UBVmz44L9QIi1+Kk94CmVbovkz8+i8QS+B1Mo1KIltm7jXrnlxFLFousZQYeKvjbH8+72ebsfcoC7Sh9pLctYsbG79EpBBMbtmU/e6GAiArs1Dd7ak8qoWs+Cx9b1Y6On3/cDEYfFq+Y+hakpsM7GP3YewebaOhbxMhojUlJ5WTSTCaG1mSXJqi9xUIcjDIriqMY8V+xgUJrpMUt66h99EX24VoTv+teEsUMh2IlxwdWgehBlXlfVA5ZhP3G3UCrbkc3DhwqbqMazAZ4E6PLjIeSiDRRM1eH1eyopEDW5aYy3ZN64rnwCSroZUO558FN//xd3zUMcjBlJLnNwCxqIgUtnXRipTkFwx3UvAHLDh314AFEc6x5gGxd2Wb7ZrfXFP1FWD2clWtoaEHKxHXXMiUo7gJgcakNKunFwvCEHUUmul5fSrT2ufrZPZcitb2PMCUcXuCpmY3kHYR8VeUPa65w9zg4cCvyG7qdr5DBqePuDtqevRDw7dnTU3czTeYCa6ksdlrmntso0ej/iN+ioLGHyrTs07BmLAJoZ63VLoPQUQRmSSKE/IVYE7xsTXEI3CXajGbSwXGIVpkVdEPIPlqTh5V0ZtpbvNYOSnnGzoKYGYppdQNTXNZzIcCzdLsHkVxcxe85xrv1JpK/pkr/Uw99eYrYIT4krioBDhzMGohN5H8NazdFM8ntxQ87Of+KvNo2KMrV+vt1S7U80tHWTmSvdhRJsyPBlxqN3CKXQBYvc4dksWULBKTe29PANOMiCyBCwkvXTsXBtOrsRBqjl6RfvdQuF66HpyugcmLt4qzDX9JVfOyPlxFhWB75pUoDh5lKqHLtkpg+aFXd9tgSVNp48NYDCVlqnDhPjx7Dv44/yU8Zn/iReAT5XO9mK/NAjwJ30XBjIrqFpffaPewyMjjgQLCrYQmXfKKR5RXI+NkngAThCN9W/BJPWghqMwyN9WCKPIG8YBF6vJOoPc9pQy0FuMZjWD6/6DNzRpRFARb2D9BIGNbZa9mWrFKy0DWCPOxf8VGzIsGju94ElmnASepICzpSnU5ZF5DciD4XO01xg1eIyiuQBfcWMr2ZBAG/Fr3yQYvOxC8EnqtnQtOYNggCL94NzWLyIlcQSTvXybR5+U5MCcQyO1NIDF4fIgs97VUM6Ow/hQUQtw3qgV7cQ2toL4AlnUybkgiosmKUO6jKaw1WBK2SiEKFUrQFZdobtmmwOMAaIpPUm5PgKcjShoTPoLVubHBF0KJXl1bXM3M3wvscmKTajUENixlLDmTngBLIUvkZeKJlLcCxXwEH2epQhSk5uXX7Hpx5VICtGJ8T1nb+gT4TqTmNrYG4r7zTC1FMUPlaZVWQi+UtqG3gtDIuMlKoUlWLPUN6Vt0oaGibjVJgiXh3ZBaFs3Kz+ws7/eAgpnn6wzrjTpE+9rwltGJJUQlCVtPgrVFSHgA9dlbtiGuEiXiG9oFx7GukES/sBnB8lOa22P5P1KM2fMAc5YglyVsPYusflcjuzo6HyuxiU024uSpQkha3kdcK9b3ZUnsN8S2gGvNJc7aA8smkZ4HOHKHHkxrGp7Tdo6JyWZtRlSzqNC5bXUK+6FDG3v45OWy7ZKiFcld373wMZJn+DnPAWVNYUxnXqUUjMWgH5CQen2wWyDaBwUC1KVbrIHKNrqSv+gPrKQ8IFhkPOjg+I27wIIkNDKrOBuBq3ASUHZYzHAXS2HY4Z5YOq1+sshh9SBaFhdpevLoj6ykHDCKbkLz1O+UQ1KNnH2VXX4gAOeKpp6Cb4cHj8klCCebmx0QEuiXXfRIMuDBNbmvR5nB0OwSI4hB912gipDNN7Pr0EYwcpa1e6R38BbAzCrQdaimlQwfIuQNB4OhB0q4FrhHYymmTehQxQvAYHgUDh74iYMnYu+UyV1zrc2wQB5ClH7OOVScE1axNdSpOnBJsC/prTIZFzlU3aMvZHvM4qb6twAN9kKsp1n9z5xS41Hq7gVWHbUZan/wVOCPJzRw4Bt3fNblerMhOFn2ha0PLZg1VUK8BhC/5ajoJrmFWSUNW1pmFo3HAhUN1CvQYSkF1ecxCNsayhaoSc3MgYhLPDterPxUzQKKDjkCsu6b7yeY6gVr3y34OPDJVPwZDgu3lG7WdYaVhaf8mw5GyniZO7EicWZVBzV8BzAK3VwGVjMD7ThJ6pdHzLJnw+l4bL1meNKmPF5kUCOrZ3re6dHZ4nvJOWinDyN/apPmqqsfruZB3qZ4PIxDnPexQu1Zjp3PKYZOQ68QAZyXklttcqbl3Fu9u4VTmzTXqTnB5NsAuh9uIS8f64VzLon+OlnNgWz4j5ivMXP9Sdjc0M6uXzjBS3Pt3Y/x0XPAqLvx3SLTgerzWSxrF2oOZNvU8nSML6zW4unQ88WvyaD7xtr7tZJYjLy1WnGO1HQ37iZND9LHAB9UeVy5yBcs6bzzaUrnXtTVHe+mpRQTk+zDXypkYkBgPPWLVUUJDMvvO9O3VXQnWmOekpc6KIXn2vQ9SHpPQCVa7a5m37dKmBWG6y4nLSj+jMO69YEUe1yn+htLg7iH6yY8DVd81675lpzwovqT7mn+dt37SduBMmXQXXIJ21IDixGONttyWSRjtR03CM7sR3fDy4AhxGl3mfv/YVoMnPx1yR3SmdSUAsdSOOwe6wN+E7FTj3bb/oPpFLSD/8s575PC8LfdehGG89V4fDqNx6t5GC7Wu7eP5fS2z06deDCKghT8/m09Kq1v+F0k1WbhVqZKPukVkJxJ58bwOZKfLMeR7RegH+Y90D4ppMCI+gbdkHmWL0GjpkLbtqtRQA5seaXfpibxX99Mw3B8oi/3qST6Le1Ul4AxH9wFUKLweAtif2f+e4uZe5OZ2Bv7s818oABKuGlrE8cEgLJSkx1HjGMPMFjtPveGH7hJy50vCCS2JrblBr6x/9yxtkOs9vPV7KhXghW/+uxdZW2olpetGRC/gTQkIukzZG8vy1046SpZjMq3kBtZ+r8HxmQrViOmjcmUXncyFqgOAQkC5i1S7xEEQsMuKxxPul4iAVxoTcYSNi1tD64kBSuU21jBfYvjpmwfXI+iySkOH+L4IcE8DihOk+jEIimyAElvtrL0BaCcA8lu4r8AxluqY7sitiC3Z+geUmIeXMb/YVYLUddWIDsGq62C4LayxrHF04ctIx6T2uCT2pDaVBZvKdtaa0m5JPVH46CsoWuxWhfxHo/1S1TK53ouF/yT6FnUVtYOELxTM6EVSJucTdDUJFxK4L8IloZqUlmet9PP4jFMeMiSUuasnrDGpmBrz/LjfbHrjRjsckbLTLzywBg5esMxVcwot/UwXLYhFzSRnNCYFSf5WeIOXHmX1yaOaNs7pfNetI187ezIAM6QEX/V3Duf8qzb2js/nbqa09yLFrFeyGo/JSsKRavNdQUsgm1rP2h8o+egVGxuC+h4e4O5jmQiIF4VaMscHtJLcxIV7RN+H0+cuAJH/LQZrQtxxHJ8utFrnvcdSv3XLy0VBA0jpJpuoRMzmMZWGRoshyNHpgfsbJdm3fsNUN6x5OmOmVUwZ7xSnMh1TmKnMr2cev8SPH1OFz8yQOf60HzszB2sLNlq5UL8+ZPbroU0jfQZdi0/uS16UhBxrJ0rZrCkO/r9v53uiD3x4FPzIB0n/r+d7qjA4Z5ndPWD7EG4/3enOya5uynf3bbf5YMCfhBWO6fG02cCY2UmmEv3Kr2WbLfX4HGE7KuF3iHHwnJnxZM0qsDiiLZmZmx6wp5kaWh3W2jka90kzQRgR7W3Mh/B2hQ+0vBLgSKV2QduMM19V+7R1KeOav9p8ONIZWYuGHOeqK5yLoxhNhbOKcKhhrJHtf8w+MaLRLMNsO7zh7dHEa9g0SWaO/GWJG1NzLC98OYMGlQ+ebGDfR5hFGUUAvLWyP5gdO9Xt015FeBJcpsadQ9ZSdQ+OfwWDbjBUP1pk8lkzSykezj8NOi+RlOvPLDKGntbB+9+MR6euQtx1En99PBoA7i2ek9eslKbZofKR9a40L8yei70LlxL9PpqSpbEtr+lvPUVYPsNdX1dwOQstGMVtj8x/MzKxfxbTa1BRkxv6czIGNeVu8DIE3qx6iTMFaChXaYqhr+o4tnzOphAqoHCr4B1yKhoGgjBXGjvatvFwiuwEs5t8Q/Fhtvsqlt60UPz2BYBssZsZbnHfL/mWPsfC6/QaJsJSifLboknBWv2HbJ9d34F7DwRvxghYjQRO3hrZFMWLkD8KcjKJMdRsQoScLr6tp3RVArEXpfmjgWKNEbK6iKWMzj6uKI+FYSueB1ZTqAgCyg0L1211VSmoDXM8StfRiAhByVn55yOqnhqk0ZqSuzR6CK2IzHJfhfB+50gAtGU/c1u6+YORUb2UM1gf1zMw/Xx5vq52ivHrayvT4DRIlcLo1uBMX1bzOeL45Yf/1QkmbQP2RnQySGEd555nolskGVT5RXqTvMtFTTDcn3fFe7UvGX+6xAaCpRAD2Kv2Oj+MVptq/pFp3J4a6/r5IDXyo62mn+ey9UjYrwwqos/yIsb0H0T0KasG3w8KQI1xJINSpPTr9ZW8fQrqlVkIdMUrAUA44cDvBKTd5k/d7gawmHhpKH7jYK9TBarHcDK4kwy06bZLtm/VfQfqQNESa2YcICf7pB9KJvrbgWQMv7YEpIwzQk5XxcR/FrVEQQwWk9VQhL+OiHb4wn+Z9SBAgPcm4xXq1PUSwo/vz6p4zgK9qLxaj5O7iRtY1oFeKeav+BGnfhOcWj5gjv94Q9/+MMf/vCHP/zhD3/4GfwPaGp62Eo3ImcAAAAASUVORK5CYII='

  //discounted list ui
  const renderItem = ({item}:any) => (
    <View style={[styles.flexRow,styles.itemContainer]}>
    <View style={{justifyContent:'center'}}>
      <Text style={styles.restaurant}>{item.restaurant}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
      <Text style={styles.validUntil}>Valid until: {item.validUntil}</Text>
    </View>
    <View>
    <Image source={{uri: imageLink}} style={styles.UserImage} />
    </View>

    </View>
  );


  return (

    //discounted list 
    <FlatList
      data={discountedList}
      renderItem={renderItem}
      horizontal={true}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default Discounted;

const styles = StyleSheet.create({
  itemContainer: {
    width: windowWidth-20,
    height:130,
    padding: 10,
    margin:10,
    borderRadius:14,
    justifyContent:'space-between',
    borderWidth:3,
    borderColor:'white',
  
  },
  UserImage: {
    width: 100,
    height: 98,
    padding:20,
    resizeMode:'center',
    borderRadius: 50,
  },
  restaurant: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  discount: {
    marginTop: 5,
  },
  validUntil: {
    marginTop: 5,
    color: 'gray',
  },
  flexRow:{
    flexDirection:'row'
  }
});

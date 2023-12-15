import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import ArrowLeft from '../icons/ArrowLeft';
import HomePinIcon from '../icons/HomePin';
import SearchIcon from '../icons/Search';
import Shield from '../icons/Shield';
import Specialties from '../icons/Specialties';
import Star from '../icons/Star';
import VerifiedIcon from '../icons/Verified';
import WalletIcon from '../icons/Wallet';

function DirectoryListing({ navigation }: any): React.JSX.Element {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/*----- HEADER ------ */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size="30" />
        </TouchableOpacity>
        <View style={styles.hLogo}>
          <Text style={styles.hLetter}>h</Text>
          <View style={[styles.purpleDots, {left: 30, top: 28}]}></View>
          <View style={styles.purpleDots}></View>
        </View>
        <TouchableOpacity style={styles.searchBar}>
          <SearchIcon color="white" />
          <Text style={styles.searchText}>Find my treatment</Text>
        </TouchableOpacity>
      </View>
      {/*----- BODY ------ */}
      <View style={styles.body}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/99d2/0335/76ccfa10fb3c074f3b08562782414925?Expires=1702857600&Signature=RMnlfdr3yIPc6Hs8kyRq5SZq-FCet5gpqHhL32px~n0IGCYgZAK~kToiyRLxtshn7LitjD6xwXUeCHVmPo1ro7eQhA~BupAFHw0AiwXPEYJ6fwacPSg6U~XkGIbWrDlkJ0UG80dSAPZJTn3OklhLHD737He~6Kq1pMZwfux1t1mFZXX~CIm~t2oKgsaSuqSKtg-CrEaSbAx1X49g12KYrd3ttDW~1iAkiUjq6qICql2rrmNz1mVLcrk7K45dlfc~BBc~kZINGjMQTPqU1ybllh-dhJGdH~V2lg~lLWBwyFFKLFAeyR1iFKyNVdcRVtUrX-vkeJeKomVBlP~sClvqLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
          style={styles.fountainLogo}></Image>
        <Text style={styles.fountainText}>
          Fountain Life White Plains, New York
        </Text>
        <View style={{flexDirection: 'row', marginTop: 18 }}>
          <VerifiedIcon width="97" height="25" />
        </View>
        <View style={[styles.whiteModule, {height: 63}]}>
          <View style={styles.moduleLabel}>
            <HomePinIcon />
            <Text style={styles.moduleLabelText}>
              2284 Peachtree Rd, Atlanta, GA, 30309
            </Text>
          </View>
        </View>
        <View style={styles.whiteModule}>
          <View style={styles.moduleLabel}>
            <Specialties />
            <Text style={styles.moduleLabelText}>Specialties</Text>
          </View>
          <View style={styles.optionsView}>
            <TouchableOpacity style={styles.optionModule}>
              <Text style={styles.optionText}>ALS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionModule}>
              <Text style={styles.optionText}>Alzheimer's</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionModule}>
              <Text style={styles.optionText}>Autism</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.whiteModule}>
          <View style={styles.moduleLabel}>
            <WalletIcon width="20" height="20" color="black" />
            <Text style={styles.moduleLabelText}>Payment Options</Text>
          </View>
          <View style={styles.optionsView}>
            <TouchableOpacity style={styles.optionModule}>
              {/* <Image style={styles.optionImg}></Image> */}
              <Text style={styles.optionText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionModule}>
              <Shield />
              <Text style={styles.optionText}>Insurance</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.whiteModule, {height: 97, flexDirection: 'row'}]}>
          <View style={styles.userImgBackground}>
            <Image
              style={styles.userImg}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/79ea/427a/addde01d9b750b848963c45cf09789a5?Expires=1702857600&Signature=f6JkheIn3Fz-cHdN9t6g-O50kpkGmtw4Wsf~Crd37SZVJdC~3DPY9qJdc61R6gEWhMP5U0i83pDw0Xh4kvavMZwge-P1ELYrAoMlTKyXoJfrJZd6zOWE6eGS75IZqh-SaE2jxcDjlga3lFp4zMDOwxXyQ7aoavkRwiPmx5oRAv~8fygvfrdd0a3JIg19eXnMK6W0W36pi8GSEyUVc-EqgrD7Xeox1xkBDpqfYD2Wj-no6bwFkssfcWxyJaxqPXOu3YUCqw5X7Pv5DaUHeV-e1YLBhXSWN~HWWhNHGaiygZ6PniIusDPtrTUQ6OtHf-okPQ~bbqHhFKEhOwgMUE-hbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              }}></Image>
          </View>
          <View style={{marginLeft: 17}}>
            <Text style={styles.userCharge}>
              CHIEF MEDICAL OFFICER, ADVANTAGE IR
            </Text>
            <Text style={styles.userText}>
              <Text>Dr. </Text>
              <Text style={styles.userName}>David Wood</Text>
            </Text>
          </View>
        </View>
      </View>
      {/*----- FOOTER ------ */}
      <View style={styles.footer}>
        <Star color="#FF6813" />
        <Text style={styles.score}>5.0</Text>
        <Text style={styles.reviews}>2.4k reviews</Text>
        <TouchableOpacity style={styles.seeTimesButton}>
          <Text style={styles.seeTimesText}>See times</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /* ------- HEADER STYLES ------- */
  header: {
    backgroundColor: '#FFFFFF',
    height: 84,
    width: '100%',

    flexDirection: 'row',
    borderBottomColor: '#EAE6DE',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    marginTop: 30,
    alignItems: "center",
    paddingHorizontal: 17,
  },
  backButton: {
  },
  backButtonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Material-Design-Iconic-Font',
  },
  hLogo: {
    marginLeft: 26,
  },
  hLetter: {
    width: '100%',
    textAlign: 'center',
    color: '#0C1D4F',
    fontSize: 30,
    fontFamily: 'Test Geograph',
    fontWeight: '900',
  },
  purpleDots: {
    width: 5,
    height: 5,
    top: 20,
    left: 30,
    position: 'absolute',
    transform: 'rotate(90deg)',
    transformOrigin: '0 0',
    backgroundColor: '#6243E9',
    borderRadius: 100,
  },
  searchBar: {
    width: 194,
    height: 47,
    backgroundColor: 'black',
    borderRadius: 100,
    marginLeft: "auto",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  searchImg: {
    height: 24,
    width: 24,
    marginVertical: 12,
    marginLeft: 19,
  },
  searchText: {
    fontSize: 11.96,
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginLeft: 11,
  },
  /* ------- BODY STYLES ------- */
  body: {
    backgroundColor: '#FEFAF6',
    height: 690,
    width: '100%',
    paddingLeft: 26,
  },
  fountainLogo: {
    width: 128,
    height: 42,
    marginTop: 24,
  },
  fountainText: {
    color: '#0C1D4F',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginTop: 14,
  },
  verifiedImg: {
    width: 23,
    height: 23,
    marginTop: 19,
  },
  verifiedText: {
    color: '#0C1D4F',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginTop: 18,
    marginLeft: 9,
  },
  whiteModule: {
    backgroundColor: 'white',
    borderColor: '#EAE6DE',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 349,
    height: 114,
    borderRadius: 20,
    marginTop: 23,
  },
  moduleLabel: {
    flexDirection: 'row',
    marginTop: 19,
    marginLeft: 23,
  },
  moduleLabelText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginLeft: 11
  },
  moduleLabelImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionsView: {
    marginTop: 16,
    marginLeft: 27,
    flexDirection: 'row',
  },
  optionModule: {
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 90,
    height: 32,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: "center",
    juistifyContent: "center",
    paddingHorizontal: 10,
  },
  optionText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  optionImg: {
    width: 20,
    height: 20,

    marginTop: 5,
    marginLeft: 12,
    marginRight: 0,
  },
  userText: {
    fontSize: 25,
    color: '#0C1D4F',
    fontFamily: 'Test Domaine Display',
    fontStyle: 'italic',
    fontWeight: '700',
    marginTop: 9,
  },
  userName: {
    fontFamily: 'Test Calibre',
    fontWeight: '500',
    color: '#0C1D4F',
  },
  userImgBackground: {
    backgroundColor: '#D6E3FB',
    borderRadius: 15,
    width: 75,
    height: 75,
    overflow: 'hidden',
    marginTop: 11,
    marginLeft: 14,
  },
  userImg: {
    width: '100%',
    height: 107,
    marginBottom: 0,
  },
  userCharge: {
    color: '#0C1D4F',
    fontSize: 10,
    fontFamily: 'Supply',
    marginTop: 17,
  },
  /* ------- FOOTER STYLES ------- */
  footer: {
    backgroundColor: 'white',
    height: 77,
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 21,
    borderTopWidth: 1,
    borderColor: "#F5EFE8"
  },
  star: {
    width: 35,
    height: 39,
    marginLeft: 21,
    marginTop: 19,
  },
  score: {
    color: '#0C1D4F',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginLeft: 10,
  },
  reviews: {
    color: '#7C7A77',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginLeft: 16,
  },
  seeTimesButton: {
    width: 170,
    height: 47,
    backgroundColor: '#6243E9',

    borderRadius: 12,
    marginVertical: 15,
    marginLeft: 15,
  },
  seeTimesText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 50,
  },
});

export default DirectoryListing;

import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useCompanies from '../hooks/useCompanies';
import AddressPinIcon from '../icons/AddressPin';
import ArrowLeft from '../icons/ArrowLeft';
import HomePinIcon from '../icons/HomePin';
import SearchIcon from '../icons/Search';
import Shield from '../icons/Shield';
import Specialties from '../icons/Specialties';
import Star from '../icons/Star';
import VerifiedIcon from '../icons/Verified';
import WalletIcon from '../icons/Wallet';
import { SanityListingCompany } from '../types/Company';

function DirectoryListing({ navigation, route }: any): React.JSX.Element {
  const [company, setCompany] = useState<SanityListingCompany>();
  const { isLoading, fetchCompany } = useCompanies();
  const { id } = route.params;
  console.log("DL", company);

  useEffect(() => {
    fetchCompany(id).then((company) => {
      setCompany(company);
    });
  }, [fetchCompany]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FEFAF6',
      }}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
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
      {isLoading ? (
        <ActivityIndicator 
          animating={isLoading}
          color="#6751e1"
          size="large"
        />
      ) : (
        <View style={styles.body}>
          {company?.logo?.url && (
            <Image
              resizeMode='contain'
              source={{
                uri: company?.logo.url,
              }}
              style={styles.fountainLogo}
            />
          )}
          <Text style={styles.fountainText}>
            {company?.name}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 18 }}>
            <VerifiedIcon width="97" height="25" />
          </View>
          <View style={[styles.whiteModule, {height: 63}]}>
            <View style={styles.moduleLabel}>
              <AddressPinIcon />
              <Text style={styles.moduleLabelText}>
                {company?.address.street}, {company?.address.city}, {company?.address.state}, {company?.address.zip}
              </Text>
            </View>
          </View>
          <View style={styles.whiteModule}>
            <View style={styles.moduleLabel}>
              <Specialties />
              <Text style={styles.moduleLabelText}>Specialties</Text>
            </View>
            <View style={styles.optionsView}>
              <ScrollView horizontal>
                {company?.treatments.map((treatment) => (
                  <TouchableOpacity key={treatment} style={styles.optionModule}>
                    <Text style={styles.optionText}>{treatment}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.whiteModule}>
            <View style={styles.moduleLabel}>
              <WalletIcon width="20" height="20" color="black" />
              <Text style={styles.moduleLabelText}>Payment Options</Text>
            </View>
            <View style={styles.optionsView}>
              <ScrollView horizontal>
                {company?.paymentOptions.map((paymentOption) => (
                  <TouchableOpacity style={styles.optionModule}>
                    {paymentOption.icon !== "credit_card" && <Shield />}
                    <Text style={styles.optionText}>{paymentOption.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          {(company?.leadPractitioner && company?.leadPractitioner?.firstname) && (
            <View style={[styles.whiteModule, {height: 97, flexDirection: 'row' }]}>
              <View style={styles.userImgBackground}>
                <Image
                  style={styles.userImg}
                  resizeMode="cover"
                  source={{
                    uri: company?.leadPractitioner?.photo?.url,
                  }}
                />
              </View>
              <View style={{marginLeft: 17}}>
                <Text style={styles.userCharge}>
                  CHIEF MEDICAL OFFICER, ADVANTAGE IR
                </Text>
                <Text style={styles.userText}>
                  <Text>{company?.leadPractitioner.title} </Text>
                  <Text style={styles.userName}>{company?.leadPractitioner.firstname} {company?.leadPractitioner.lastname}</Text>
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
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
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginLeft: 5,
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

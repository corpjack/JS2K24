const resp = {
    "d": "[{\"LoginID\":2,\"RegistrationID\":4,\"UserTypeID\":2,\"Name\":\"Company\",\"LoginName\":\"Company\",\"LoginPassword\":\"Company\",\"RegistrationID1\":4,\"ParentID\":0,\"SystemID\":\"G100002\",\"Name1\":\"Company\",\"Gender\":\"Male\",\"MaritalStatus\":\"\",\"DOB\":\"1 1 1910\",\"EmailID\":\"info@Gloriousfuture.in\",\"MobileNo\":\"9898989898\",\"Address\":\"delhi\",\"Country\":\"India\",\"State\":\"Delhi\",\"City\":\"delhi\",\"PostalCode\":\"110091\",\"BTCAddress\":\"\",\"NomineeName\":\"Gloriousfuture\",\"NomineeRelation\":\"Owner\",\"Active\":true,\"LeftRight\":\"L         \",\"RefID\":0,\"ActivationDate\":\"2021-10-22T08:29:00\",\"Createdon\":\"2021-10-20T05:04:00\",\"Block\":false,\"DateofBirth\":null,\"BankName\":null,\"BankCityTown\":null,\"BankCode\":\"ICIC0321\",\"AccountNo\":\"54545454\",\"PANUpload\":null,\"AadharUpload\":null,\"Photo\":null,\"PANGIRNo\":null,\"AadharNo\":null,\"FatherName\":null,\"MotherName\":null,\"Qualification\":null,\"Occupation\":null,\"Age\":null,\"NameInAccount\":null,\"TypeOfAccount\":null,\"ExpiryDate\":null,\"PanVarify\":false,\"AadharVarify\":false,\"PhotoVarify\":false,\"KYCUpdateDate\":\"2019-05-19T11:58:27.557\",\"ProfileImage\":\"100921092939sai-baba.jpg\",\"AdminComm\":null,\"UserComm\":null,\"QRCode\":null,\"BlockReason\":null,\"RegText\":null,\"UserTypeID1\":2,\"UserTypeName\":\"User\",\"IsAdmin\":false,\"RegistrationID2\":4,\"PName\":null}]"
};

//! store Json data into object
const { d } = resp;
console.log(d);

//! convert into object.
const parseData = JSON.parse(d);
const [{ LoginID: login, Name: names, Address: add , ProfileImage }] = parseData;
console.log(login, names, add,ProfileImage);


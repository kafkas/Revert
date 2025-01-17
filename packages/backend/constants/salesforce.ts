export interface SalesforceContact {
    Id: string;
    IsDeleted: boolean;
    MasterRecordId: string;
    AccountId: string;
    LastName: string;
    FirstName: string;
    Salutation: string;
    Name: string;
    OtherStreet: string;
    OtherCity: string;
    OtherState: string;
    OtherPostalCode: string;
    OtherCountry: string;
    OtherLatitude: number;
    OtherLongitude: number;
    OtherGeocodeAccuracy: string;
    OtherAddress: { [key: string]: any };
    MailingStreet: string;
    MailingCity: string;
    MailingState: string;
    MailingPostalCode: string;
    MailingCountry: string;
    MailingLatitude: number;
    MailingLongitude: number;
    MailingGeocodeAccuracy: string;
    MailingAddress: { [key: string]: any };
    Phone: string;
    Fax: string;
    MobilePhone: string;
    HomePhone: string;
    OtherPhone: string;
    AssistantPhone: string;
    ReportsToId: string;
    Email: string;
    Title: string;
    Department: string;
    AssistantName: string;
    LeadSource: string;
    Birthdate: Date;
    Description: string;
    OwnerId: string;
    CreatedDate: Date;
    CreatedById: string;
    LastModifiedDate: Date;
    LastModifiedById: string;
    SystemModstamp: Date;
    LastActivityDate: Date;
    LastCURequestDate: Date;
    LastCUUpdateDate: Date;
    LastViewedDate: Date;
    LastReferencedDate: Date;
    EmailBouncedReason: string;
    EmailBouncedDate: Date;
    IsEmailBounced: boolean;
    PhotoUrl: string;
    Jigsaw: string;
    JigsawContactId: string;
    CleanStatus: string;
    IndividualId: string;
}

export interface SalesforceLead {
    Id: string;
    IsDeleted: boolean;
    MasterRecordId: string;
    LastName: string;
    FirstName: string;
    Salutation: string;
    Name: string;
    Title: string;
    Company: string;
    Street: string;
    City: string;
    State: string;
    PostalCode: string;
    Country: string;
    Latitude: number;
    Longitude: number;
    GeocodeAccuracy: string;
    Address: { [key: string]: any };
    Phone: string;
    MobilePhone: string;
    Fax: string;
    Email: string;
    Website: string;
    PhotoUrl: string;
    Description: string;
    LeadSource: string;
    Status: string;
    Industry: string;
    Rating: string;
    AnnualRevenue: number;
    NumberOfEmployees: number;
    OwnerId: string;
    IsConverted: boolean;
    ConvertedDate: Date;
    ConvertedAccountId: string;
    ConvertedContactId: string;
    ConvertedOpportunityId: string;
    IsUnreadByOwner: boolean;
    CreatedDate: Date;
    CreatedById: string;
    LastModifiedDate: Date;
    LastModifiedById: string;
    SystemModstamp: Date;
    LastActivityDate: Date;
    LastViewedDate: Date;
    LastReferencedDate: Date;
    Jigsaw: string;
    JigsawContactId: string;
    CleanStatus: string;
    CompanyDunsNumber: string;
    DandbCompanyId: string;
    EmailBouncedReason: string;
    EmailBouncedDate: Date;
    IndividualId: string;
}

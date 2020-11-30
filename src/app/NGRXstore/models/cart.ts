export class Cart {
  selectedFeature?: string = "";
  selectedNode?: string = "";
  deviceType?: string = "";
  browser?: string = "sample name";
  browserVersion?: string = "";
  device?: string = "";
  os?: string = "";
  osVersion?: string = "";
  passwordExpiry?: number;
  screenHeight?: number = 1;
  screenWidth?: number = 1;
  passwordNotWork?: any;

  userUuid?: string = "";
  isMobile?: boolean = false;
  isDesk?: boolean = false;
  isTab?: boolean = false;
  //isUserInSetting?: boolean = false; /**cart cleanup 959*/
  //==================================Authetication=======================
  isSignIn?: boolean = false;
  isLogin?: boolean = false;
  isReg?: boolean = false;
  isUpdatePwd?: boolean = false;
  //isDashboard?: boolean = false; /**cart cleanup 959*/
  //isForgotPassword?: boolean = false;/**cart cleanup 959*/
  isResetPassword?: boolean = false;
  isAccountSummaryVisible?: boolean = true;
  topHeaderSearchSelect?: boolean = false;
  sideHeaderSearchSelect?: boolean = false;

  //==================================Temp Store Token for Change Password=======================
  updatePassToken?: string;

  //==================================APP SETTING=======================
  preFetchGraph?: false;
  graphAnimationSpeed? = 100;
  maxTreeChildLimit? = 25;
  pageSize? = 50;
  dateTimeFormat: string = "llll";
  //==================================LAYOUT=======================
  lSplitterVisible?: boolean = true;
  settingPanelHeight?: number;
  isTreeViewAllowed?: boolean = true;
  //==================================USER DETAIL=======================
  firstName?: string = "";
  lastName?: string = "";
  emailAddress?: string = "";
  lastLoginTs?: string = "";
  forgotPassLink?: boolean = false;

  // ================================= ROOT NODE=====================
  nodeLabel?: string = "";
  nodeTypeLabel?: string = "";
  uniqueIdentifier?: string = "";
  homeNodeUuid?: string = "";

  topNodes?: any[];
  // ================================= SELECTED NODE=====================
  selectedNodeLabel?: string = "";
  //selectedNodeTypeId?: string = ''; /**cart cleanup 959*/
  selectedNodeTypeLabel?: string = "";
  selectedNodeUuid?: string = "";
  //selectedUniqueIdentifier?: string = ''; /**cart cleanup 959*/
  entitlementsObj? = {
    test_param: "default value",
    test_param_next: "default value",
    ekey_dashboard: false,
    ekey_view_tree: true,
    ekey_prospecting: false,
    ekey_graph_view_savings_calculator: false,
    ekey_access_manage_users: false,
    ekey_access_manage_nodes: false,
    ekey_access_interval_data_graph: false,
    ekey_portfolio_view: true,
    ekey_access_manage_roles: false,
    ekey_access_system_tools: false,
    ekey_access_manage_data_capture: false,
    ekey_graph_view_account_details: false,
    ekey_manage_attributes: false,
    ekey_access_manage_weather: false,
    ekey_add_user_now: true,
    ekey_job_status: false,
    ekey_pre_prospecting: false,
    ekey_system_reports: false,
    ekey_advanced_search: false,
    ekey_view_activities: false,
    ekey_manage_notifications: false,
    ekey_manage_user_settings: false
  };

  attributeDataList?: any = {};
  currentNodeList?: any[] = [];
  isProspectCurrList: boolean = false;

  // ================================= Graph=====================
  graphDrawerIsOpen?: boolean = false;

  isLocked: any;
  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class UserData {
  token?: string;
  userUuid?: string;
  selectedNode?: string;
}

// export class deviceInfo: {
//     deviceType?: string
//     browser?: string
//     browser_version?: string
//     device?: string
//     os?: string
//     os_version?: string
//     userAgent?: string
//   };

export interface Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    mission_patch_small: string;
    rocket: Rocket;
    launch_site: LaunchSite;
    links: Links;
    flight_number: string;
    launch_success: boolean;
  }
  
  interface Rocket {
    rocket_name: string;
  }
  
  interface LaunchSite {
    site_name_long: string;
  }
  
  interface Links {
    mission_patch_small: string;
  }
  
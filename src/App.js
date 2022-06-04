import { useEffect, useState } from "react";
import "./App.css";
import ActivityCard from "./components/ActivityCard";

// Static Data for Test
// const activity1 = {
//   resource_state: 2,
//   athlete: {
//     id: 20280428,
//     resource_state: 1,
//   },
//   name: "Morning Ride",
//   distance: 124203,
//   moving_time: 15750,
//   elapsed_time: 17633,
//   total_elevation_gain: 1060,
//   type: "Ride",
//   workout_type: 10,
//   id: 7200449657,
//   start_date: "2022-05-25T08:47:19Z",
//   start_date_local: "2022-05-25T10:47:19Z",
//   timezone: "(GMT+01:00) Europe/Berlin",
//   utc_offset: 7200,
//   location_city: null,
//   location_state: null,
//   location_country: "Germany",
//   achievement_count: 0,
//   kudos_count: 14,
//   comment_count: 0,
//   athlete_count: 1,
//   photo_count: 0,
//   map: {
//     id: "a7200449657",
//     summary_polyline:
//       "srraHiewm@sb@pB}FlE}Vg@}J`SoDx@cZkMrChQmAyC{@nEJx]eFrPyHnEjS~c@p@dWyCbQjBbLCjn@tCtOz^hl@xRs@rAvj@tDdRdVf_@j[fLfRff@tRcRj_@mOvBleAwVlM{Vzh@gX`H_c@r~@sr@tw@yuAtrBbDlNzJnt@~@hPcAdJmK|QDnHxDdPjKhyAzIj^kBbI~HvdA_E~\\mO~Ls\\dx@kt@nc@}Ul\\vDnFtA~U_F~rAaLx^uJ~HhJjg@`Dxk@xGnTtBxj@`Hx\\jFjl@lM`@m@`MfK`^x[lZbJfVrIri@tUvn@bGvz@d[dv@s@lR|JfQnKnc@dFvs@pKv~@t@z`A|DzUrLhNqKfSwBrMjHnyAkD`VpIlGz[p_Anf@`HjMfRzQbSlMpBjGrIff@aOhMRjLpJtMsLhSho@d\\d@xNxHfT`V~IdDbEnO~OtJ`u@dCbP`LbTbAtMjUvQvItj@l_AzZbDr@pEbHfEtQkE~p@nNnTsDbFzGdAnS`KmKhWsKnHuSjIqIcGgQjJez@Kej@fH{_ApEsX~VoYeAqF~ByHkKeRuNyq@dJeOeHkUuAgb@bPa~A@mU`G_OtLyJ|Twf@zFsGrIElCeLhIyI_D_XrByRnJgEzHxItXrGhJirAzFbA~TwZjM[hRmMxDaOD{QnCqFnQ`NPc_@jBeKnE}DbExAfDfXlShOsAzd@|CrZ`HyYpCwAjHqj@zFdIjKoE|G`KnPlNxE_MjQDbD}N^_YhBJc@|GLwI`SsOfY`T\\jWpGg_@_AkUhEkk@uAeWlBif@~FyXf@}PdK}Y`Ck[jF}MjJcNlBgRRkVeHql@xBcZxI{YcG}`AwLu]sBin@xG_l@oAcg@tC}k@vDaSnIsKhEk]fOo@~G{O~SwQ`MsXvDiYoAg^|B}IdL_KVaIoR}OcW`@uNuGoO|E{E_~@ih@}DaR{n@eV_c@qI_o@iB_|@cG_QyOqQsBiKXok@rNq\\vCaQnRc`@uJwUaAkj@kKmz@tDqG_B}M~A_]qNk[}PFnPEvL~VgJiPgGsCeg@pJup@u|@sLjImKlYmV|GsDeL_S{GaNcMmd@aKiQ`ByZiE_JrLmNAod@od@qOy[so@g@qZqHyeAjUsMyFeJjAWeLiDoCu`@H_@fGkf@E_@oKqj@_Bq@wEaVsB}H|Cmb@i]qDXThHgOlGeEcVvAub@iOkK_UuAA_RoC{HdAuSk_AqTsH{E{Si\\aS_IiB`Dqv@sP{IeCi@}EmT}EkDnHuu@yKoKpB",
//     resource_state: 2,
//   },
//   trainer: false,
//   commute: false,
//   manual: false,
//   private: false,
//   visibility: "everyone",
//   flagged: false,
//   gear_id: "b9829862",
//   start_latlng: [47.61402583681047, 7.660535965114832],
//   end_latlng: [47.61369399726391, 7.660543089732528],
//   average_speed: 7.886,
//   max_speed: 16.678,
//   average_cadence: 85.4,
//   average_temp: 23,
//   average_watts: 163.8,
//   max_watts: 642,
//   weighted_average_watts: 183,
//   kilojoules: 2579.9,
//   device_watts: true,
//   has_heartrate: true,
//   average_heartrate: 150.2,
//   max_heartrate: 176,
//   heartrate_opt_out: false,
//   display_hide_heartrate_option: true,
//   elev_high: 632.2,
//   elev_low: 242.6,
//   upload_id: 7667848180,
//   upload_id_str: "7667848180",
//   external_id: "garmin_push_8890362728",
//   from_accepted_tag: false,
//   pr_count: 0,
//   total_photo_count: 13,
//   has_kudoed: false,
//   suffer_score: 360,
// };

// #######################################

const baseAPI_URL =
  "https://www.strava.com/api/v3/athlete/activities?access_token=b18ffe0064b3ff1823cdbd52dd5b422886f8e976";

function App() {
  // Populate activites for global scope
  let [activities, setActivities] = useState([]);

  // Strava API call
  const getActivities = async () => {
    let response = await fetch(baseAPI_URL);
    let result = await response.json();
    // console.log(result);
    setActivities((activities = result));
    console.log(activities);
  };

  // Calls API and retrieve activites on load

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div>
      {activities.map((activity) => {
        <h1>{activity}</h1>;
      })}
    </div>
  );
}

export default App;

// export const formatTime = () => 'formatted time';

export const formatTime = ( time ) => {
  if (time == null ) {   // without arg
    return null;
  } else if (isNaN(time)) {   // if NaN
    return null; 
  } else if ( time < 0) {   // number less than 0
    return null;
  } else {


    let second = Math.floor(time % 60);       //?
    let minute = Math.floor((time / 60) % 60);  //?
    let hour = Math.floor(time / 3600);       //?

    return hour, minute, second;              //  ? 
  }

};
angular.module('app')

.filter('date', function(Utils){
  'use strict';
  return function(date, format){
    var jsDate = Utils.toDate(date);
    return jsDate ? moment(jsDate).format(format ? format : 'll') : '<date>';
  };
})

.filter('datetime', function(Utils){
  'use strict';
  return function(date, format){
    var jsDate = Utils.toDate(date);
    return jsDate ? moment(jsDate).format(format ? format : 'D MMM YYYY, HH:mm:ss') : '<datetime>';
  };
})

.filter('time', function(Utils){
  'use strict';
  return function(date, format){
    var jsDate = Utils.toDate(date);
    return jsDate ? moment(jsDate).format(format ? format : 'LT') : '<time>';
  };
})

.filter('humanTime', function(Utils){
  'use strict';
  return function(date){
    var jsDate = Utils.toDate(date);
    return jsDate ? moment(jsDate).fromNow(true) : '<humanTime>';
  };
})

.filter('duration', function($log){
  'use strict';
  return function(seconds, humanize){
    if(seconds || seconds === 0){
      if(humanize){
        return moment.duration(seconds, 'seconds').humanize();
      } else {
        var prefix = -60 < seconds && seconds < 60 ? '00:' : '';
        return prefix + moment.duration(seconds, 'seconds').format('hh:mm:ss');
      }
    } else {
      $log.warn('Unable to format duration', seconds);
      return '<duration>';
    }
  };
})

.filter('mynumber', function($filter){
  'use strict';
  return function(number, round){
    var mul = Math.pow(10, round ? round : 0);
    return $filter('number')(Math.round(number*mul)/mul);
  };
});

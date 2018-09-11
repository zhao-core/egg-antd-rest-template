webpackJsonp([4],{1810:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),u=r(n),o=a(182),s=r(o),d=a(1823);t.default={namespace:"tableManager",state:{list:[],selectedRowKeys:[],loading:!1,pagination:{current:1,pageSize:10,total:0}},effects:{loadTableManager:s.default.mark(function e(t,a){var r,n=t.payload,u=a.call,o=a.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"showLoading"});case 2:return n.sortField="time",n.sortOrder="desc",e.next=6,u(d.query,n);case 6:return r=e.sent,e.next=9,o({type:"loadTableManagerSuccess",payload:{data:r,current:n.page,pageSize:n.pageSize}});case 9:return e.next=11,o({type:"hideLoading"});case 11:return e.next=13,o({type:"selectedRowKeys",payload:{selectedRowKeys:[]}});case 13:case"end":return e.stop()}},e,this)}),removeTableManager:s.default.mark(function e(t,a){var r,n,u=t.payload,o=a.call,l=a.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"showLoading"});case 2:return e.next=4,o(d.remove,u);case 4:return r=e.sent,console.log("delete payload",u),e.next=8,o(d.removeTable,u);case 8:if(n=e.sent,!r||!r.success){e.next=14;break}return e.next=12,l({type:"loadTableManager",payload:{page:1,pageSize:10}});case 12:e.next=16;break;case 14:return e.next=16,l({type:"hideLoading"});case 16:case"end":return e.stop()}},e,this)}),updateTableManager:s.default.mark(function e(t,a){var r,n,u,o=t.payload,l=a.call,c=a.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({type:"showLoading"});case 2:return r=o.page,n=o.pageSize,delete o.page,delete o.pageSize,e.next=8,l(d.update,o);case 8:if(!(u=e.sent)||!u.success){e.next=14;break}return e.next=12,c({type:"loadTableManager",payload:{page:r,pageSize:n}});case 12:e.next=16;break;case 14:return e.next=16,c({type:"hideLoading"});case 16:case"end":return e.stop()}},e,this)})},reducers:{showLoading:function(e){return(0,u.default)({},e,{loading:!0})},hideLoading:function(e){return(0,u.default)({},e,{loading:!1})},selectedRowKeys:function(e,t){return(0,u.default)({},e,{selectedRowKeys:t.payload.selectedRowKeys})},loadTableManagerSuccess:function(e,t){var a=t.payload.data;return(0,u.default)({},e,{list:a.data.record,selectedRowKeys:[],pagination:{current:t.payload.current,pageSize:t.payload.pageSize,total:a.data.totalRecord||0}})}}},e.exports=t.default},1823:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.id;return delete e.id,(0,l.request)({url:"/api/restql/web_node/"+t,method:"put",data:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.removeTable=t.remove=t.query=void 0;var u=a(182),o=r(u),s=a(364),d=r(s);t.query=function(){var e=(0,d.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)({url:"/api/restql/web_node",method:"GET",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,d.default)(o.default.mark(function e(t){var a,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.selectedRowKeys||[],r=a.join(","),e.abrupt("return",(0,l.request)({url:"/api/restql/web_node/"+r,method:"delete"}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.removeTable=function(){var e=(0,d.default)(o.default.mark(function e(t){var a,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.templateArr||[],r=a.join(","),e.abrupt("return",(0,l.request)({url:"/api/table/"+r,method:"delete"}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.update=n;var l=a(88)}});
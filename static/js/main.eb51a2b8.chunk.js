(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),s=n(9),c=n.n(s),l=(n(16),n(10)),o=n(7),u=n(3),p=n(4),b=n(6),h=n(5),d=n(2),g=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).getKeys=function(){if(void 0!==this.props.data)return["name","city","state","telephone","genre"]},r.getHeader=function(){return(this.getKeys()||[]).map((function(e,t){return Object(a.jsx)("th",{children:e.toUpperCase()},e)}))},r.getRowsData=function(){var e=this.props.data,t=this.getKeys()||[];return e.map((function(e,n){return Object(a.jsx)("tr",{children:Object(a.jsx)(f,{data:e,keys:t},n)},n)}))},r.getHeader=r.getHeader.bind(Object(d.a)(r)),r.getRowsData=r.getRowsData.bind(Object(d.a)(r)),r.getKeys=r.getKeys.bind(Object(d.a)(r)),r}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",placeholder:"filter by state",className:"textboxes",onChange:function(t){e.props.filter(t,"state")}}),Object(a.jsx)("input",{type:"checkbox",checked:this.props.enableStateFilter,onChange:function(){return e.props.enableState(!e.props.enableStateFilter)}}),"Enable state Search",Object(a.jsx)("input",{type:"text",placeholder:"filter by genre",className:"textboxes",style:{marginLeft:"30px"},onChange:function(t){e.props.filter(t,"genre")}}),Object(a.jsx)("input",{type:"checkbox",checked:this.props.enablegenerFilter,onChange:function(){return e.props.enableGener(!e.props.enablegenerFilter)}}),"Enable genre Search",Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:this.getHeader()})}),this.props.data.length>0?Object(a.jsx)("tbody",{children:this.getRowsData()}):Object(a.jsx)("tbody",{children:Object(a.jsx)("td",{colSpan:5,children:"No Data"})}),Object(a.jsx)("td",{colSpan:5,children:Object(a.jsx)("ul",{id:"page-numbers",children:this.props.pagination.map((function(t){return Object(a.jsx)("li",{style:{color:t===e.props.currentpage?"red":null},id:t,onClick:e.props.pageClick,children:t},t)}))})})]})]})}}]),n}(i.a.Component),f=function(e){return e.keys.map((function(t,n){return Object(a.jsx)("td",{children:e.data[t]},e.data[t])}))},j=(n(17),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClick=function(e){a.setState({currentPage:Number(e.target.id)})},a.enableState=function(e){a.setState({enableStateFilter:e},(function(){var e=a.state,t=e.genre,n=e.state,r=e.enableStateFilter,i=Object(o.a)(a.state.restaurantData);r||(n="");var s=i.filter((function(e){return e.state.toUpperCase().includes(n)&&e.genre.toUpperCase().includes(t)}));a.setState({filterData:s,currentPage:1})}))},a.enableGener=function(e){a.setState({enablegenerFilter:e},(function(){var e=a.state,t=e.genre,n=e.state,r=e.enablegenerFilter,i=Object(o.a)(a.state.restaurantData);r||(t="");var s=i.filter((function(e){return e.state.toUpperCase().includes(n)&&e.genre.toUpperCase().includes(t)}));a.setState({filterData:s,currentPage:1})}))},a.filterRestaurent=function(e,t){a.setState(Object(l.a)({},t,e.target.value.toUpperCase()),(function(){var e=a.state,t=e.genre,n=e.state,r=Object(o.a)(a.state.restaurantData).filter((function(e){return e.state.toUpperCase().includes(n)&&e.genre.toUpperCase().includes(t)}));a.setState({filterData:r,currentPage:1})}))},a.state={genre:"",state:"",currentPage:1,recordsperPage:10,enablegenerFilter:!0,enableStateFilter:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{headers:{Authorization:"Api-Key q3MNxtfep8Gt"}}).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})),e.setState({restaurantData:t,filterData:t})}))}},{key:"render",value:function(){for(var e=this.state,t=e.filterData,n=void 0===t?[]:t,r=e.recordsperPage,i=e.currentPage*r,s=i-r,c=n.slice(s,i),l=[],o=1;o<=Math.ceil(n.length/r);o++)l.push(o);return Object(a.jsx)(g,{data:c||[],pagination:l,filter:this.filterRestaurent,pageClick:this.handleClick,enableStateFilter:this.state.enableStateFilter,enableState:this.enableState,enablegenerFilter:this.state.enablegenerFilter,enableGener:this.enableGener,currentpage:this.state.currentPage})}}]),n}(i.a.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.eb51a2b8.chunk.js.map
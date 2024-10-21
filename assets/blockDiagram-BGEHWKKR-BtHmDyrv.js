import{p as Re,y as Le,g as ve,R as Be,I as Pe,N as Ke}from"./chunk-A2BVO372-Dg6OiW6t.js";import{m as g,Q as Se,d as Ye,J as L,v as Fe,as as j,u as Me,b as H,k as Xe,G as We,b6 as je}from"./mermaid.esm.min-BxVDGyBU.js";import{b as Ge}from"./chunk-6XGRHI2A-CNHHWkbj.js";import{_ as Ue}from"./chunk-BKDDFIKN-d_gOG68A.js";import"./app-BLmUDr3s.js";var re=function(){var e=g(function(m,s,a,o){for(a=a||{},o=m.length;o--;a[m[o]]=s);return a},"o"),c=[1,7],h=[1,13],n=[1,14],r=[1,15],u=[1,19],l=[1,16],p=[1,17],x=[1,18],S=[8,30],b=[8,21,28,29,30,31,32,40,44,47],_=[1,23],I=[1,24],D=[8,15,16,21,28,29,30,31,32,40,44,47],$=[8,15,16,21,27,28,29,30,31,32,40,44,47],k=[1,49],z={trace:g(function(){},"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:g(function(m,s,a,o,y,t,d){var i=t.length-1;switch(y){case 4:o.getLogger().debug("Rule: separator (NL) ");break;case 5:o.getLogger().debug("Rule: separator (Space) ");break;case 6:o.getLogger().debug("Rule: separator (EOF) ");break;case 7:o.getLogger().debug("Rule: hierarchy: ",t[i-1]),o.setHierarchy(t[i-1]);break;case 8:o.getLogger().debug("Stop NL ");break;case 9:o.getLogger().debug("Stop EOF ");break;case 10:o.getLogger().debug("Stop NL2 ");break;case 11:o.getLogger().debug("Stop EOF2 ");break;case 12:o.getLogger().debug("Rule: statement: ",t[i]),typeof t[i].length=="number"?this.$=t[i]:this.$=[t[i]];break;case 13:o.getLogger().debug("Rule: statement #2: ",t[i-1]),this.$=[t[i-1]].concat(t[i]);break;case 14:o.getLogger().debug("Rule: link: ",t[i],m),this.$={edgeTypeStr:t[i],label:""};break;case 15:o.getLogger().debug("Rule: LABEL link: ",t[i-3],t[i-1],t[i]),this.$={edgeTypeStr:t[i],label:t[i-1]};break;case 18:let T=parseInt(t[i]),K=o.generateId();this.$={id:K,type:"space",label:"",width:T,children:[]};break;case 23:o.getLogger().debug("Rule: (nodeStatement link node) ",t[i-2],t[i-1],t[i]," typestr: ",t[i-1].edgeTypeStr);let X=o.edgeStrToEdgeData(t[i-1].edgeTypeStr);this.$=[{id:t[i-2].id,label:t[i-2].label,type:t[i-2].type,directions:t[i-2].directions},{id:t[i-2].id+"-"+t[i].id,start:t[i-2].id,end:t[i].id,label:t[i-1].label,type:"edge",directions:t[i].directions,arrowTypeEnd:X,arrowTypeStart:"arrow_open"},{id:t[i].id,label:t[i].label,type:o.typeStr2Type(t[i].typeStr),directions:t[i].directions}];break;case 24:o.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[i-1],t[i]),this.$={id:t[i-1].id,label:t[i-1].label,type:o.typeStr2Type(t[i-1].typeStr),directions:t[i-1].directions,widthInColumns:parseInt(t[i],10)};break;case 25:o.getLogger().debug("Rule: nodeStatement (node) ",t[i]),this.$={id:t[i].id,label:t[i].label,type:o.typeStr2Type(t[i].typeStr),directions:t[i].directions,widthInColumns:1};break;case 26:o.getLogger().debug("APA123",this?this:"na"),o.getLogger().debug("COLUMNS: ",t[i]),this.$={type:"column-setting",columns:t[i]==="auto"?-1:parseInt(t[i])};break;case 27:o.getLogger().debug("Rule: id-block statement : ",t[i-2],t[i-1]),o.generateId(),this.$={...t[i-2],type:"composite",children:t[i-1]};break;case 28:o.getLogger().debug("Rule: blockStatement : ",t[i-2],t[i-1],t[i]);let B=o.generateId();this.$={id:B,type:"composite",label:"",children:t[i-1]};break;case 29:o.getLogger().debug("Rule: node (NODE_ID separator): ",t[i]),this.$={id:t[i]};break;case 30:o.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[i-1],t[i]),this.$={id:t[i-1],label:t[i].label,typeStr:t[i].typeStr,directions:t[i].directions};break;case 31:o.getLogger().debug("Rule: dirList: ",t[i]),this.$=[t[i]];break;case 32:o.getLogger().debug("Rule: dirList: ",t[i-1],t[i]),this.$=[t[i-1]].concat(t[i]);break;case 33:o.getLogger().debug("Rule: nodeShapeNLabel: ",t[i-2],t[i-1],t[i]),this.$={typeStr:t[i-2]+t[i],label:t[i-1]};break;case 34:o.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[i-3],t[i-2]," #3:",t[i-1],t[i]),this.$={typeStr:t[i-3]+t[i],label:t[i-2],directions:t[i-1]};break;case 35:case 36:this.$={type:"classDef",id:t[i-1].trim(),css:t[i].trim()};break;case 37:this.$={type:"applyClass",id:t[i-1].trim(),styleClass:t[i].trim()};break;case 38:this.$={type:"applyStyles",id:t[i-1].trim(),stylesStr:t[i].trim()};break}},"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:c,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:r,32:u,40:l,44:p,47:x},{8:[1,20]},e(S,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:c,28:h,29:n,31:r,32:u,40:l,44:p,47:x}),e(b,[2,16],{14:22,15:_,16:I}),e(b,[2,17]),e(b,[2,18]),e(b,[2,19]),e(b,[2,20]),e(b,[2,21]),e(b,[2,22]),e(D,[2,25],{27:[1,25]}),e(b,[2,26]),{19:26,26:12,32:u},{11:27,13:4,19:5,20:6,21:c,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:r,32:u,40:l,44:p,47:x},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e($,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(S,[2,13]),{26:35,32:u},{32:[2,14]},{17:[1,36]},e(D,[2,24]),{11:37,13:4,14:22,15:_,16:I,19:5,20:6,21:c,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:r,32:u,40:l,44:p,47:x},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e($,[2,30]),{18:[1,43]},{18:[1,44]},e(D,[2,23]),{18:[1,45]},{30:[1,46]},e(b,[2,28]),e(b,[2,35]),e(b,[2,36]),e(b,[2,37]),e(b,[2,38]),{37:[1,47]},{34:48,35:k},{15:[1,50]},e(b,[2,27]),e($,[2,33]),{39:[1,51]},{34:52,35:k,39:[2,31]},{32:[2,15]},e($,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:g(function(m,s){if(s.recoverable)this.trace(m);else{var a=new Error(m);throw a.hash=s,a}},"parseError"),parse:g(function(m){var s=this,a=[0],o=[],y=[null],t=[],d=this.table,i="",T=0,K=0,X=0,B=2,P=1,Ce=t.slice.call(arguments,1),E=Object.create(this.lexer),Y={yy:{}};for(var Q in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Q)&&(Y.yy[Q]=this.yy[Q]);E.setInput(m,Y.yy),Y.yy.lexer=E,Y.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var ee=E.yylloc;t.push(ee);var ze=E.options&&E.options.ranges;typeof Y.yy.parseError=="function"?this.parseError=Y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ae(O){a.length=a.length-2*O,y.length=y.length-O,t.length=t.length-O}g(Ae,"popStack");function ge(){var O;return O=o.pop()||E.lex()||P,typeof O!="number"&&(O instanceof Array&&(o=O,O=o.pop()),O=s.symbols_[O]||O),O}g(ge,"lex");for(var N,te,F,C,ft,se,M={},G,v,ue,U;;){if(F=a[a.length-1],this.defaultActions[F]?C=this.defaultActions[F]:((N===null||typeof N>"u")&&(N=ge()),C=d[F]&&d[F][N]),typeof C>"u"||!C.length||!C[0]){var ie="";U=[];for(G in d[F])this.terminals_[G]&&G>B&&U.push("'"+this.terminals_[G]+"'");E.showPosition?ie="Parse error on line "+(T+1)+`:
`+E.showPosition()+`
Expecting `+U.join(", ")+", got '"+(this.terminals_[N]||N)+"'":ie="Parse error on line "+(T+1)+": Unexpected "+(N==P?"end of input":"'"+(this.terminals_[N]||N)+"'"),this.parseError(ie,{text:E.match,token:this.terminals_[N]||N,line:E.yylineno,loc:ee,expected:U})}if(C[0]instanceof Array&&C.length>1)throw new Error("Parse Error: multiple actions possible at state: "+F+", token: "+N);switch(C[0]){case 1:a.push(N),y.push(E.yytext),t.push(E.yylloc),a.push(C[1]),N=null,te?(N=te,te=null):(K=E.yyleng,i=E.yytext,T=E.yylineno,ee=E.yylloc,X>0);break;case 2:if(v=this.productions_[C[1]][1],M.$=y[y.length-v],M._$={first_line:t[t.length-(v||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(v||1)].first_column,last_column:t[t.length-1].last_column},ze&&(M._$.range=[t[t.length-(v||1)].range[0],t[t.length-1].range[1]]),se=this.performAction.apply(M,[i,K,T,Y.yy,C[1],y,t].concat(Ce)),typeof se<"u")return se;v&&(a=a.slice(0,-1*v*2),y=y.slice(0,-1*v),t=t.slice(0,-1*v)),a.push(this.productions_[C[1]][0]),y.push(M.$),t.push(M._$),ue=d[a[a.length-2]][a[a.length-1]],a.push(ue);break;case 3:return!0}}return!0},"parse")},R=function(){var m={EOF:1,parseError:g(function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},"parseError"),setInput:g(function(s,a){return this.yy=a||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:g(function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:g(function(s){var a=s.length,o=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===y.length?this.yylloc.first_column:0)+y[y.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:g(function(){return this._more=!0,this},"more"),reject:g(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:g(function(s){this.unput(this.match.slice(s))},"less"),pastInput:g(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:g(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:g(function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:g(function(s,a){var o,y,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),y=s[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],o=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var d in t)this[d]=t[d];return!1}return!1},"test_match"),next:g(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,o,y;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),d=0;d<t.length;d++)if(o=this._input.match(this.rules[t[d]]),o&&(!a||o[0].length>a[0].length)){if(a=o,y=d,this.options.backtrack_lexer){if(s=this.test_match(o,t[d]),s!==!1)return s;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(s=this.test_match(a,t[y]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:g(function(){var s=this.next();return s||this.lex()},"lex"),begin:g(function(s){this.conditionStack.push(s)},"begin"),popState:g(function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:g(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:g(function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},"topState"),pushState:g(function(s){this.begin(s)},"pushState"),stateStackSize:g(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:g(function(s,a,o,y){switch(o){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;case 2:return s.getLogger().debug("Found nl-block"),31;case 3:return s.getLogger().debug("Found space-block"),29;case 4:s.getLogger().debug(".",a.yytext);break;case 5:s.getLogger().debug("_",a.yytext);break;case 6:return 5;case 7:return a.yytext=-1,28;case 8:return a.yytext=a.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",a.yytext),28;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",a.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",a.yytext),"STR";case 15:return a.yytext=a.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",a.yytext),21;case 16:return a.yytext="1",s.getLogger().debug("COLUMNS (LEX)",a.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 66:return this.pushState("NODE"),36;case 67:return this.pushState("NODE"),36;case 68:return this.pushState("NODE"),36;case 69:return this.pushState("NODE"),36;case 70:return this.pushState("NODE"),36;case 71:return this.pushState("NODE"),36;case 72:return this.pushState("NODE"),36;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;case 75:return s.getLogger().debug("Lex: NODE_ID",a.yytext),32;case 76:return s.getLogger().debug("Lex: EOF",a.yytext),8;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",a.yytext),"NODE_DESCR";case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",a.yytext),"DIR";case 87:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",a.yytext),"DIR";case 88:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",a.yytext),"DIR";case 89:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",a.yytext),"DIR";case 90:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",a.yytext),"DIR";case 91:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",a.yytext),"DIR";case 92:return a.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",a.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;case 94:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 95:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 96:return s.getLogger().debug("Lex: LINK",a.yytext),15;case 97:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 98:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 99:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;case 105:return s.getLogger().debug("Lex: COLON",a.yytext),a.yytext=a.yytext.slice(1),27}},"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return m}();z.lexer=R;function w(){this.yy={}}return g(w,"Parser"),w.prototype=z,z.Parser=w,new w}();re.parser=re;var He=re,A=new Map,ne=[],ae=new Map,de="color",pe="fill",Je="bgFill",fe=",",qe=Se(),q=new Map,Ze=g(e=>Ye.sanitizeText(e,qe),"sanitizeText"),Ve=g(function(e,c=""){let h=q.get(e);h||(h={id:e,styles:[],textStyles:[]},q.set(e,h)),c==null||c.split(fe).forEach(n=>{let r=n.replace(/([^;]*);/,"$1").trim();if(RegExp(de).exec(n)){let u=r.replace(pe,Je).replace(de,pe);h.textStyles.push(u)}h.styles.push(r)})},"addStyleClass"),Qe=g(function(e,c=""){let h=A.get(e);c!=null&&(h.styles=c.split(fe))},"addStyle2Node"),et=g(function(e,c){e.split(",").forEach(function(h){let n=A.get(h);if(n===void 0){let r=h.trim();n={id:r,type:"na",children:[]},A.set(r,n)}n.classes||(n.classes=[]),n.classes.push(c)})},"setCssClass"),me=g((e,c)=>{let h=e.flat(),n=[];for(let r of h){if(r.label&&(r.label=Ze(r.label)),r.type==="classDef"){Ve(r.id,r.css);continue}if(r.type==="applyClass"){et(r.id,(r==null?void 0:r.styleClass)??"");continue}if(r.type==="applyStyles"){r!=null&&r.stylesStr&&Qe(r.id,r==null?void 0:r.stylesStr);continue}if(r.type==="column-setting")c.columns=r.columns??-1;else if(r.type==="edge"){let u=(ae.get(r.id)??0)+1;ae.set(r.id,u),r.id=u+"-"+r.id,ne.push(r)}else{r.label||(r.type==="composite"?r.label="":r.label=r.id);let u=A.get(r.id);if(u===void 0?A.set(r.id,r):(r.type!=="na"&&(u.type=r.type),r.label!==r.id&&(u.label=r.label)),r.children&&me(r.children,r),r.type==="space"){let l=r.width??1;for(let p=0;p<l;p++){let x=Ue(r);x.id=x.id+"-"+p,A.set(x.id,x),n.push(x)}}else u===void 0&&n.push(r)}}c.children=n},"populateBlockDatabase"),le=[],W={id:"root",type:"composite",children:[],columns:-1},tt=g(()=>{L.debug("Clear called"),Fe(),W={id:"root",type:"composite",children:[],columns:-1},A=new Map([["root",W]]),le=[],q=new Map,ne=[],ae=new Map},"clear");function _e(e){switch(L.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return L.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}g(_e,"typeStr2Type");function ke(e){switch(L.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}g(ke,"edgeTypeStr2Type");function Ee(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}g(Ee,"edgeStrToEdgeData");var ye=0,st=g(()=>(ye++,"id-"+Math.random().toString(36).substr(2,12)+"-"+ye),"generateId"),it=g(e=>{W.children=e,me(e,W),le=W.children},"setHierarchy"),rt=g(e=>{let c=A.get(e);return c?c.columns?c.columns:c.children?c.children.length:-1:-1},"getColumns"),at=g(()=>[...A.values()],"getBlocksFlat"),nt=g(()=>le||[],"getBlocks"),lt=g(()=>ne,"getEdges"),ot=g(e=>A.get(e),"getBlock"),ct=g(e=>{A.set(e.id,e)},"setBlock"),ht=g(()=>console,"getLogger"),gt=g(function(){return q},"getClasses"),ut={getConfig:g(()=>j().block,"getConfig"),typeStr2Type:_e,edgeTypeStr2Type:ke,edgeStrToEdgeData:Ee,getLogger:ht,getBlocksFlat:at,getBlocks:nt,getEdges:lt,setHierarchy:it,getBlock:ot,setBlock:ct,getColumns:rt,getClasses:gt,clear:tt,generateId:st},dt=ut,J=g((e,c)=>{let h=We,n=h(e,"r"),r=h(e,"g"),u=h(e,"b");return Me(n,r,u,c)},"fade"),pt=g(e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${J(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${J(e.mainBkg,.5)};
    fill: ${J(e.clusterBkg,.5)};
    stroke: ${J(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,"getStyles"),yt=pt,be,xe,f=((xe=(be=Se())==null?void 0:be.block)==null?void 0:xe.padding)??8;function De(e,c){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(c<0||!Number.isInteger(c))throw new Error("Position must be a non-negative integer."+c);if(e<0)return{px:c,py:0};if(e===1)return{px:0,py:c};let h=c%e,n=Math.floor(c/e);return{px:h,py:n}}g(De,"calculateBlockPosition");var bt=g(e=>{let c=0,h=0;for(let n of e.children){let{width:r,height:u,x:l,y:p}=n.size??{width:0,height:0,x:0,y:0};L.debug("getMaxChildSize abc95 child:",n.id,"width:",r,"height:",u,"x:",l,"y:",p,n.type),n.type!=="space"&&(r>c&&(c=r/(e.widthInColumns??1)),u>h&&(h=u))}return{width:c,height:h}},"getMaxChildSize");function Z(e,c,h=0,n=0){var l,p,x,S,b,_,I,D,$,k,z;L.debug("setBlockSizes abc95 (start)",e.id,(l=e==null?void 0:e.size)==null?void 0:l.x,"block width =",e==null?void 0:e.size,"sieblingWidth",h),(p=e==null?void 0:e.size)!=null&&p.width||(e.size={width:h,height:n,x:0,y:0});let r=0,u=0;if(((x=e.children)==null?void 0:x.length)>0){for(let t of e.children)Z(t,c);let R=bt(e);r=R.width,u=R.height,L.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",r,u);for(let t of e.children)t.size&&(L.debug(`abc95 Setting size of children of ${e.id} id=${t.id} ${r} ${u} ${JSON.stringify(t.size)}`),t.size.width=r*(t.widthInColumns??1)+f*((t.widthInColumns??1)-1),t.size.height=u,t.size.x=0,t.size.y=0,L.debug(`abc95 updating size of ${e.id} children child:${t.id} maxWidth:${r} maxHeight:${u}`));for(let t of e.children)Z(t,c,r,u);let w=e.columns??-1,m=0;for(let t of e.children)m+=t.widthInColumns??1;let s=e.children.length;w>0&&w<m&&(s=w);let a=Math.ceil(m/s),o=s*(r+f)+f,y=a*(u+f)+f;if(o<h){L.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${h} sieblingHeight ${n} width ${o}`),o=h,y=n;let t=(h-s*f-f)/s,d=(n-a*f-f)/a;L.debug("Size indata abc88",e.id,"childWidth",t,"maxWidth",r),L.debug("Size indata abc88",e.id,"childHeight",d,"maxHeight",u),L.debug("Size indata abc88 xSize",s,"padding",f);for(let i of e.children)i.size&&(i.size.width=t,i.size.height=d,i.size.x=0,i.size.y=0)}if(L.debug(`abc95 (finale calc) ${e.id} xSize ${s} ySize ${a} columns ${w}${e.children.length} width=${Math.max(o,((S=e.size)==null?void 0:S.width)||0)}`),o<(((b=e==null?void 0:e.size)==null?void 0:b.width)||0)){o=((_=e==null?void 0:e.size)==null?void 0:_.width)||0;let t=w>0?Math.min(e.children.length,w):e.children.length;if(t>0){let d=(o-t*f-f)/t;L.debug("abc95 (growing to fit) width",e.id,o,(I=e.size)==null?void 0:I.width,d);for(let i of e.children)i.size&&(i.size.width=d)}}e.size={width:o,height:y,x:0,y:0}}L.debug("setBlockSizes abc94 (done)",e.id,(D=e==null?void 0:e.size)==null?void 0:D.x,($=e==null?void 0:e.size)==null?void 0:$.width,(k=e==null?void 0:e.size)==null?void 0:k.y,(z=e==null?void 0:e.size)==null?void 0:z.height)}g(Z,"setBlockSizes");function oe(e,c){var n,r,u,l,p,x,S,b,_,I,D,$,k,z,R,w,m;L.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(n=e==null?void 0:e.size)==null?void 0:n.x} y: ${(r=e==null?void 0:e.size)==null?void 0:r.y} width: ${(u=e==null?void 0:e.size)==null?void 0:u.width}`);let h=e.columns??-1;if(L.debug("layoutBlocks columns abc95",e.id,"=>",h,e),e.children&&e.children.length>0){let s=((p=(l=e==null?void 0:e.children[0])==null?void 0:l.size)==null?void 0:p.width)??0,a=e.children.length*s+(e.children.length-1)*f;L.debug("widthOfChildren 88",a,"posX");let o=0;L.debug("abc91 block?.size?.x",e.id,(x=e==null?void 0:e.size)==null?void 0:x.x);let y=(S=e==null?void 0:e.size)!=null&&S.x?((b=e==null?void 0:e.size)==null?void 0:b.x)+(-((_=e==null?void 0:e.size)==null?void 0:_.width)/2||0):-f,t=0;for(let d of e.children){let i=e;if(!d.size)continue;let{width:T,height:K}=d.size,{px:X,py:B}=De(h,o);if(B!=t&&(t=B,y=(I=e==null?void 0:e.size)!=null&&I.x?((D=e==null?void 0:e.size)==null?void 0:D.x)+(-(($=e==null?void 0:e.size)==null?void 0:$.width)/2||0):-f,L.debug("New row in layout for block",e.id," and child ",d.id,t)),L.debug(`abc89 layout blocks (child) id: ${d.id} Pos: ${o} (px, py) ${X},${B} (${(k=i==null?void 0:i.size)==null?void 0:k.x},${(z=i==null?void 0:i.size)==null?void 0:z.y}) parent: ${i.id} width: ${T}${f}`),i.size){let P=T/2;d.size.x=y+f+P,L.debug(`abc91 layout blocks (calc) px, pyid:${d.id} startingPos=X${y} new startingPosX${d.size.x} ${P} padding=${f} width=${T} halfWidth=${P} => x:${d.size.x} y:${d.size.y} ${d.widthInColumns} (width * (child?.w || 1)) / 2 ${T*((d==null?void 0:d.widthInColumns)??1)/2}`),y=d.size.x+P,d.size.y=i.size.y-i.size.height/2+B*(K+f)+K/2+f,L.debug(`abc88 layout blocks (calc) px, pyid:${d.id}startingPosX${y}${f}${P}=>x:${d.size.x}y:${d.size.y}${d.widthInColumns}(width * (child?.w || 1)) / 2${T*((d==null?void 0:d.widthInColumns)??1)/2}`)}d.children&&oe(d),o+=(d==null?void 0:d.widthInColumns)??1,L.debug("abc88 columnsPos",d,o)}}L.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${(R=e==null?void 0:e.size)==null?void 0:R.x} y: ${(w=e==null?void 0:e.size)==null?void 0:w.y} width: ${(m=e==null?void 0:e.size)==null?void 0:m.width}`)}g(oe,"layoutBlocks");function ce(e,{minX:c,minY:h,maxX:n,maxY:r}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){let{x:u,y:l,width:p,height:x}=e.size;u-p/2<c&&(c=u-p/2),l-x/2<h&&(h=l-x/2),u+p/2>n&&(n=u+p/2),l+x/2>r&&(r=l+x/2)}if(e.children)for(let u of e.children)({minX:c,minY:h,maxX:n,maxY:r}=ce(u,{minX:c,minY:h,maxX:n,maxY:r}));return{minX:c,minY:h,maxX:n,maxY:r}}g(ce,"findBounds");function we(e){let c=e.getBlock("root");if(!c)return;Z(c,e,0,0),oe(c),L.debug("getBlocks",JSON.stringify(c,null,2));let{minX:h,minY:n,maxX:r,maxY:u}=ce(c),l=u-n,p=r-h;return{x:h,y:n,width:p,height:l}}g(we,"layout");function he(e,c,h=!1){var _,I,D;let n=e,r="default";(((_=n==null?void 0:n.classes)==null?void 0:_.length)||0)>0&&(r=((n==null?void 0:n.classes)??[]).join(" ")),r=r+" flowchart-label";let u=0,l="",p;switch(n.type){case"round":u=5,l="rect";break;case"composite":u=0,l="composite",p=0;break;case"square":l="rect";break;case"diamond":l="question";break;case"hexagon":l="hexagon";break;case"block_arrow":l="block_arrow";break;case"odd":l="rect_left_inv_arrow";break;case"lean_right":l="lean_right";break;case"lean_left":l="lean_left";break;case"trapezoid":l="trapezoid";break;case"inv_trapezoid":l="inv_trapezoid";break;case"rect_left_inv_arrow":l="rect_left_inv_arrow";break;case"circle":l="circle";break;case"ellipse":l="ellipse";break;case"stadium":l="stadium";break;case"subroutine":l="subroutine";break;case"cylinder":l="cylinder";break;case"group":l="rect";break;case"doublecircle":l="doublecircle";break;default:l="rect"}let x=je((n==null?void 0:n.styles)??[]),S=n.label,b=n.size??{width:0,height:0,x:0,y:0};return{labelStyle:x.labelStyle,shape:l,labelText:S,rx:u,ry:u,class:r,style:x.style,id:n.id,directions:n.directions,width:b.width,height:b.height,x:b.x,y:b.y,positioned:h,intersect:void 0,type:n.type,padding:p??((D=(I=j())==null?void 0:I.block)==null?void 0:D.padding)??0}}g(he,"getNodeFromBlock");async function Ne(e,c,h){let n=he(c,h,!1);if(n.type==="group")return;let r=j(),u=await Le(e,n,{config:r}),l=u.node().getBBox(),p=h.getBlock(n.id);p.size={width:l.width,height:l.height,x:0,y:0,node:u},h.setBlock(p),u.remove()}g(Ne,"calculateBlockSize");async function $e(e,c,h){let n=he(c,h,!0);if(h.getBlock(n.id).type!=="space"){let r=j();await Le(e,n,{config:r}),c.intersect=n==null?void 0:n.intersect,ve(n)}}g($e,"insertBlockPositioned");async function V(e,c,h,n){for(let r of c)await n(e,r,h),r.children&&await V(e,r.children,h,n)}g(V,"performOperations");async function Ie(e,c,h){await V(e,c,h,Ne)}g(Ie,"calculateBlockSizes");async function Oe(e,c,h){await V(e,c,h,$e)}g(Oe,"insertBlocks");async function Te(e,c,h,n,r){let u=new Ge({multigraph:!0,compound:!0});u.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(let l of h)l.size&&u.setNode(l.id,{width:l.size.width,height:l.size.height,intersect:l.intersect});for(let l of c)if(l.start&&l.end){let p=n.getBlock(l.start),x=n.getBlock(l.end);if(p!=null&&p.size&&(x!=null&&x.size)){let S=p.size,b=x.size,_=[{x:S.x,y:S.y},{x:S.x+(b.x-S.x)/2,y:S.y+(b.y-S.y)/2},{x:b.x,y:b.y}];Be(e,{v:l.start,w:l.end,name:l.id},{...l,arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:_,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",u,r),l.label&&(await Pe(e,{...l,label:l.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:l.arrowTypeEnd,arrowTypeStart:l.arrowTypeStart,points:_,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),Ke({...l,x:_[1].x,y:_[1].y},{originalPath:_}))}}}g(Te,"insertEdges");var xt=g(function(e,c){return c.db.getClasses()},"getClasses"),Lt=g(async function(e,c,h,n){let{securityLevel:r,block:u}=j(),l=n.db,p;r==="sandbox"&&(p=H("#i"+c));let x=r==="sandbox"?H(p.nodes()[0].contentDocument.body):H("body"),S=r==="sandbox"?x.select(`[id="${c}"]`):H(`[id="${c}"]`);Re(S,["point","circle","cross"],n.type,c);let b=l.getBlocks(),_=l.getBlocksFlat(),I=l.getEdges(),D=S.insert("g").attr("class","block");await Ie(D,b,l);let $=we(l);if(await Oe(D,b,l),await Te(D,I,_,l,c),$){let k=$,z=Math.max(1,Math.round(.125*(k.width/k.height))),R=k.height+z+10,w=k.width+10,{useMaxWidth:m}=u;Xe(S,R,w,!!m),L.debug("Here Bounds",$,k),S.attr("viewBox",`${k.x-5} ${k.y-5} ${k.width+10} ${k.height+10}`)}},"draw"),St={draw:Lt,getClasses:xt},wt={parser:He,db:dt,renderer:St,styles:yt};export{wt as diagram};

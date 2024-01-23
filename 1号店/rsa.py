# -*- coding: utf-8 -*-
# @Author : John
# @Time : 2023/10/20
# @File : rsa.py
import base64
import execjs

with open('完整功能.js') as f:
    jscode = f.read()

js = execjs.compile(jscode)

key = js.call('fn')
print(key)
key2 = '81r8pfsya553wxebhza1697707698428bwnk~NmZeSyVEbFNSd356c1laCn98Bw9hRHpTBiUjb35DFm5vLUROOBEzLUF7G28iAAFBKBgVFA1EPwIVKDclGENXbm8iVlQiAwpTTx1lKSsTCG5vfmsaDUR6LUEnG29+PU8DLHIACTAAZRJRJyIpJQJbVyt2U1lpAjBGWyd1KH0CXAEkK01kc0oKUwoyKhFmWzEQKyVbSzQ6dF0/Yy8+MD1PCBFmR1kiFSYeETVpNCwFQ1EiKWsafTp0AQ0dZXcYQ0JCLDdESD4UIl4PLiAkKj4EXD0xQxY1CQpTTx1lPTA9TwgRZl9MJRYlSz9jaxFmEQRub35rGmVKZ11XbXdhdE1dbm85FRRzAzIVECZld2ZVBQM9ZhsaMhV0S0E2KSg1UgABJHFYQT0KYghbN3YrPlUURSpyBUAmDz1EUy0qODNDQRAuZg0aMhY6AFY1czo8VAlTfXYEWyMLOUBVeHB6dFZbC3VwBQAiUWMaQW1lKTcPTwhvd1gIIhcvHBpja28tEk8Ib3UVFHMMPxJBe2V0fVhUEDA=|~1697787874379~1~20201218~eyJ2aXdlIjoiMCIsImJhaW4iOnsiaWMiOiIxIiwibGUiOiIxMDAiLCJjdCI6IjAiLCJkdCI6ImkifX0=~2~407~miic|gw3l;a020z;1defq-od,9b,17,48;ewi8;gw4;1d7q-rg,3k,59,l;ew1;1d0-re,3k,57,k;gw1;1d8-rd,33,56,3;1d8-rc,32,55,3;1d8-rc,32,54,2;1dh-r9,31,51,2;1d8-r7,31,4z,2;1d8-r4,31,4x,2;1d7-r2,31,4v,2;1dh-qp,33,4i,4;1d8-ql,34,4e,5;1d8-qa,38,43,9;1d9-q2,3b,3v,b;1di-pq,3f,3j,g;1dd-pc,3k,34,k;1d8-p6,3l,2z,m;1dg-ox,3p,2p,q;1d8-ot,3r,2l,r;1d9-oq,3t,2j,u;1d7-oo,3v,2h,w;1d9-on,3y,2f,y;1df-ol,41,2d,12;1da-ok,43,2c,14;ew42;1dfe-oi,7q,s,g;1d28-p8,6k,21,1h;905s;bd11-pi,67,2b,13;a01;0d28-pi,67,2b,13;1d18-pj,67,2b,13;90w;301-pr,66,s,o;100-pr,66,s,o;102o-qk,63,1l,k;103l-ql,63,1m,k;1021-qg,65,1h,n;20j8;2028;203a;1027-qf,66,1g,o;407-qd,68,1e,q;1d1-qd,68,35,15;312e-pq,7b,r,0;110-pq,7b,r,0;b166-po,7v,p,l;a04;911;214v;013-po,7v,p,l;211z;2173;214;112x-po,7v,p,k;411y-pu,7a,v,-1;1d0-pu,7a,2m,e;ew4x;gw1;1dj1-pw,9a,2q,0;ew7s;358d-q1,b1,2u,t;151t-q1,b1,2u,t;b58t-qb,b1,34,s;a12;950;a538;903;054-qb,b1,34,-2m;451-qb,6z,34,-2m;1d0-qb,6z,33,3;gw0;1d5k-q8,6z,31,3;a0r4;1dev-h7,7q,1t,5;ew8o;gw3;90zx;a0do;cw4n-1420,153;1dgf-ta,8s,ta,83;1df6-iv,84,iv,7f;90eo;bd1f-g1,74,7,4;a00;1d17-g1,74,7,4;1d6k-kx,79,x,l;0dmb-ku,7d,o,q;1d7j-kw,7c,37,g;1dps-ew,79,ex,6k;bd8s-fn,6z,a,b;1djh-kg,70,9,d;0d6i-kg,70,9,d;1dkr-gj,70,16,d;bd64-g3,75,9,5;1dlo-l3,78,7,8;0dar-l0,78,9,8;1dis-l1,77,a,6;doei:,1,0,0,0,0,1000,-1000,1000,-1000;dmei:,1,0,0,1000,-1000,1000,-1000,1000,-1000;emc:,0:21,1:34,5:34,d:456;emmm:,0:22-0,1:1-0,5:1-0,d:701-0;emcf:,d:62,0:21,d:11,1:34,d:14,5:34,d:369;ivli:,0:3,1:4;iivl:,0:0,1:0;ivcvj:,0:0:0,0:0:0;scvje:;ewhi:,0:233-24,1:233-24,5:330-52;1697787828069,1697787874377,2,1,104,104,0,665,0,0,0;fee1'


print(len(key)) # 537
print(len(key2)) # 2258


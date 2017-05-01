select
	mp_pta_gu, top10
from(
		select mp_pta_gu, (mp_pta_bus+mp_pta_train) as top10
		from mp_pta
		order by top10 desc
	)
where rownum between 1 and 10

select * from mp_people;

select * from MP_ADDCD;
MP_ADDCD_SIDO
mp_addcd_gg


select
			mp_addcd_gg 
			from MP_ADDCD where mp_addcd_sido = '서울특별시'
			order by mp_addcd_gg
			
select * from MP_ADDCD where mp_addcd_dong = '청운동'
			

select
			*
			from MP_ADDCD where mp_addcd_gg = '종로구'
			order by mp_addcd_dong
			
			
select * from MP_LOC_INFO;


select * from mp_data where gu = '동'


select * from mp_loc_info where bjd_cd = '4119510200';

select count(*) from MP_LOC_INFO;

select count(bjd_cd), bjd_cd from mp_loc_info group by bjd_cd;

select * from MP_DATA_100;


select * from mp_data2;

select
			conditionName, si, gu, dong, citycode, value
		from
			table
			
			
			update mp_data2 set citycode=41190102 where citycode=41195102;
			
			
select distinct(bjd_cd), sigungu_nm, emd_nm, gwanhal from mp_loc_info where emd_nm in (select distinct(emd_nm) from mp_loc_info where gwanhal in(select distinct(gwanhal) from mp_loc_info));

create table saveKeyCount(
tmapCarKeyCount varchar2(20),
tmapWalkKeyCount varchar2(20),
googleKeyCount varchar2(20),
dayth date default sysdate
)
drop table savekeycount
select * from SAVEKEYCOUNT
select * from SAVEDATA
drop table savedata
commit
create table SAVEDATA(
checknumber varchar2(30),
checkemail varchar2(50),
gu varchar2(100),
dong varchar2(100),
dongscore varchar2(30),
car1 varchar2(100),
car2 varchar2(100),
car3 varchar2(100),
car4 varchar2(100),
car5 varchar2(100),
walk1 varchar2(100),
walk2 varchar2(100),
walk3 varchar2(100),
walk4 varchar2(100),
walk5 varchar2(100),
tradi1 varchar2(100),
tradi2 varchar2(100),
tradi3 varchar2(100),
tradi4 varchar2(100),
tradi5 varchar2(100),
count varchar2(30)
)

select * from mp_Data_3 where gu = '부평구';
ALTER TABLE mp_Data_3 RENAME COLUMN price_lease to leasingPrice;
ALTER TABLE mp_Data_3 RENAME COLUMN price_buy to salePrice;
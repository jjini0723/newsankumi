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


select * from mp_Data_3 where gu = '부평구';
ALTER TABLE mp_Data_3 RENAME COLUMN price_lease to leasingPrice;
ALTER TABLE mp_Data_3 RENAME COLUMN price_buy to salePrice;
commit
select * from SAVEDATAFILE
CREATE TABLE SAVEDATAFILE(
   TOP123 VARCHAR2(30),
   CHECKNUMBER VARCHAR2(30),
   CHECKEMAIL VARCHAR2 (50),
   GU VARCHAR2 (100),
   DONG VARCHAR2 (100),
   DONGSCORE VARCHAR2 (50),
   CAR1 VARCHAR2 (100),
   CAR2 VARCHAR2 (100),
   CAR3 VARCHAR2 (100),
   CAR4 VARCHAR2 (100),
   CAR5 VARCHAR2 (100),
   WALK1 VARCHAR2 (100),
   WALK2 VARCHAR2 (100),
   WALK3 VARCHAR2 (100),
   WALK4 VARCHAR2 (100),
   WALK5 VARCHAR2 (100),
   TRADI1 VARCHAR2 (100),
   TRADI2 VARCHAR2 (100),
   TRADI3 VARCHAR2 (100),
   TRADI4 VARCHAR2 (100),
   TRADI5 VARCHAR2 (100),
   COUNT VARCHAR2 (30)
)



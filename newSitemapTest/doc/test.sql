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



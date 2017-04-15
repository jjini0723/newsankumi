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

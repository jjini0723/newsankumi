/**
 * 
 */
function init(){
	coords2 = new Array();
    perfect = new Array();
	yebi ='';
	carArray = new Array(); // 희망목적지 이동수단 자동차인 경우의 좌표를 저장하는 배열
	walkArray = new Array(); // 희망목적지 이동수단 도보인 경우의 좌표를 저장하는 배열
	tradiArray = new Array(); // 희망목적지 이동수단 대중교통인 경우의 좌표를 저장하는 배열
	emdName = null;
	hopeList = new Array(); //희망목적지 리스트 담을 배열
	newMarkers = []; //희망목적지에 등록된 장소를 표현할 마커를 저장할 배열.
	marker2 = [];
	recLocationArray = new Array();
	hopeDestinationArray = new Array();
	circleArray = new Array();
	finalAddList = new Array();
   	finalHopeList = new Array();
	result300 = []; // 저장 할꺼 1번
	dongScore = [];
	infoList = new Array(); // 인포윈도우를 저장할 배열
	overlayList = new Array(); // 오버레이를 저장할 배열
	circleList = new Array();//맵쇼리스트에서 보여주는 원들 초기화
	conditionResultList = new Array();
	top123 = 0;
}
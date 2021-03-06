-- 환승역은 두개이상의 노선이 지나는 역으로 가정
-- LINE_ROUTES 에서 ID 가 두개이상인 역을 구함
SELECT SS.ID, SS.NAME
FROM SUBWAY_STATIONS SS INNER JOIN (
	SELECT * FROM (
		SELECT LR.STATION_ID, COUNT(LR.STATION_ID) AS COUNT
		FROM LINE_ROUTES LR
		GROUP BY LR.STATION_ID
	) LR2
	WHERE LR2.COUNT >= 2
) LR ON SS.ID = LR.STATION_ID
ORDER BY ID ASC
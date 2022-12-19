import { HistoryListcontainer, TeamItemWrapper } from "./TeamHistoryList.style";

interface ITeam {
    id: string | number; //post id
    endDate: string; //YYYY_HH_MM
    title: string;
}

const TeamHistoryList = ({ list }: { list: ITeam[] }) => {
    return (
        <HistoryListcontainer>
            {list
                ? list.map((item, index) => (
                      <div className="history-content-wrapper">
                          <TeamItemWrapper key={item.title}>
                              <div className="circle-item"></div>
                              <p className="day-item">{item.endDate}</p>
                              <p className="class-item">
                                  {item.title.length > 15
                                      ? item.title.slice(0, 14) + "..."
                                      : item.title}
                              </p>
                          </TeamItemWrapper>
                          {index === list.length - 1 ? (
                              <>
                                  <div className="end-item"></div>
                                  <div className="end-item-circle"></div>
                                  <div className="end-item-circle"></div>
                                  <div className="end-item-circle"></div>
                              </>
                          ) : (
                              <p className="line-item"></p>
                          )}
                      </div>
                  ))
                : null}
        </HistoryListcontainer>
    );
};

export default TeamHistoryList;

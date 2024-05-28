import style from "../../css/CommunityPage/Community.module.css";
import Navbar from "../MainPage/Navbar";

export default function Community(props) {
  return (
    <div className={style.bg}>
      {/* header */}
      <Navbar></Navbar>

      {/* title */}
      <p
        style={{
          position: "absolute",
          left: 81,
          top: 148,
          fontSize: 32,
          fontWeight: 700,
          textAlign: "left",
          color: "#fff",
        }}
      >
        커뮤니티
      </p>

      {/* button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 135,
          position: "absolute",
          left: 1147,
          top: 139,
          overflow: "hidden",
          padding: 12,
          borderRadius: 6,
          background: "#e50000",
          borderWidth: 1,
          borderColor: "#262626",
        }}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            flexGrow: 0,
            flexShrink: 0,
            width: 24,
            height: 24,
            position: "relative",
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M12 6V20M19 13L5 13"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p
          style={{
            flexGrow: 0,
            flexShrink: 0,
            fontSize: 14,
            fontWeight: 500,
            textAlign: "left",
            color: "#fff",
          }}
        >
          글 쓰러 가기
        </p>
      </div>

      {/* content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: 1238,
          height: 2206,
          position: "absolute",
          left: 81,
          top: 218,
          overflow: "hidden",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            flexGrow: 0,
            flexShrink: 0,
            height: 2206,
            width: 1201,
            gap: 35,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              height: 100,
              width: 1201,
              gap: 10,
              padding: 40,
              borderRadius: 10,
              background: "#1a1a1a",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                width: 1124,
                position: "relative",
              }}
            >
              <div
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 247,
                  height: 30,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    left: 37,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  자유 게시판 제목입니다.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 40,
                }}
              >
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  작성자
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  21:49 (목)
                </p>
                <p
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    fontSize: 20,
                    fontWeight: 500,
                    textAlign: "left",
                    color: "#fff",
                  }}
                >
                  조회수
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            flexGrow: 0,
            flexShrink: 0,
            fontSize: 18,
            fontWeight: 500,
            textAlign: "left",
            color: "#fff",
          }}
        >
          {" "}
        </p>
      </div>

      {/* footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: 1440,
          position: "absolute",
          left: 0,
          top: 2424,
          gap: 80,
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 80,
          paddingBottom: 40,
          background: "#0f0f0f",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexGrow: 0,
            flexShrink: 0,
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 1,
              position: "relative",
              gap: 20,
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                flexGrow: 0,
                flexShrink: 0,
                width: 630,
                fontSize: 18,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              메인 화면
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                alignSelf: "stretch",
                flexGrow: 0,
                flexShrink: 0,
                position: "relative",
                gap: 10,
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 630,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                Categories
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 630,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                Devices
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 630,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                Pricing
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 630,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                FAQ
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 1,
              position: "relative",
              gap: 20,
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                flexGrow: 0,
                flexShrink: 0,
                width: 630,
                fontSize: 18,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              SNS
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 10,
                  padding: 12,
                  borderRadius: 6,
                  background: "#1a1a1a",
                  borderWidth: 1,
                  borderColor: "#262626",
                }}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    position: "relative",
                  }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_343_393)">
                    <path
                      d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_343_393">
                      <rect width={20} height={20} fill="white" />
                    </clippath>
                  </defs>
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 10,
                  padding: 12,
                  borderRadius: 6,
                  background: "#1a1a1a",
                  borderWidth: 1,
                  borderColor: "#262626",
                }}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    position: "relative",
                  }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_343_396)">
                    <path
                      d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_343_396">
                      <rect width={20} height={20} fill="white" />
                    </clippath>
                  </defs>
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexGrow: 0,
                  flexShrink: 0,
                  position: "relative",
                  gap: 10,
                  padding: 12,
                  borderRadius: 6,
                  background: "#1a1a1a",
                  borderWidth: 1,
                  borderColor: "#262626",
                }}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexGrow: 0,
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    position: "relative",
                  }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clip-path="url(#clip0_343_399)">
                    <path
                      d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clippath id="clip0_343_399">
                      <rect width={20} height={20} fill="white" />
                    </clippath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignSelf: "stretch",
            flexGrow: 0,
            flexShrink: 0,
            position: "relative",
            gap: 20,
          }}
        >
          <svg
            width={1280}
            height={1}
            viewBox="0 0 1280 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ alignSelf: "stretch", flexGrow: 0, flexShrink: 0 }}
            preserveAspectRatio="xMidYMid meet"
          >
            <line y1="0.5" x2={1280} y2="0.5" stroke="#262626" />
          </svg>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignSelf: "stretch",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                textAlign: "left",
                color: "#999",
              }}
            >
              @2023 streamvib, All Rights Reserved
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                position: "relative",
                gap: 16,
              }}
            >
              <p
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  fontSize: 14,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                이용 약관
              </p>
              <svg
                width={1}
                height={21}
                viewBox="0 0 1 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ alignSelf: "stretch", flexGrow: 0, flexShrink: 0 }}
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-8"
                  x2="0.499999"
                  y2={21}
                  stroke="#262626"
                />
              </svg>
              <p
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  fontSize: 14,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                약관 사항
              </p>
              <svg
                width={1}
                height={21}
                viewBox="0 0 1 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ alignSelf: "stretch", flexGrow: 0, flexShrink: 0 }}
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-8"
                  x2="0.499999"
                  y2={21}
                  stroke="#262626"
                />
              </svg>
              <p
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  fontSize: 14,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                쿠키 관련 약관
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

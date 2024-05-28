import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const fetchUpcomingMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    gap: 25px;
    padding: 40px;
    border-radius: 10px;
    background: #1a1a1a;
    border: 1px solid #262626;
    margin-right: 30px;
    margin-left: 30px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 30px;
`;

const Title = styled.p`
    flex-grow: 1;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    color: #999;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`;

const RoundButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #141414;
    border: 1px solid #262626;
    cursor: pointer;
    &:hover {
        background-color: #262626;
    }
    &:active {
        background-color: #262626;
        border: 1px solid red;
        transition: all 0.3s ease;
    }
`;

const SvgIcon = styled.svg`
    width: 20px;
    height: 20px;
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 16px;
    padding: 30px;
    border-radius: 12px;
    background: #0f0f0f;
    border: 1px solid #262626;
`;

const ContentText = styled.p`
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    text-align: left;
    color: #999;
`;

const BoldText = styled(ContentText)`
    width: 710px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`;

const Poster = styled.img`
    width: 100px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 20px;
`;

export default function UpcomigReleases() {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchUpcomingMovies().then(setMovies);
    }, []);

    const handleNext = () => {
        if (index < movies.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <Container>
            <Header>
                <Title>기대되는 개봉작</Title>
                <IconContainer>
                    <RoundButton onClick={handlePrev}>
                        <SvgIcon viewBox="0 0 20 20" fill="none">
                            <path
                                d="M16.25 10L3.75 10M3.75 10L9.375 15.625M3.75 10L9.375 4.375"
                                stroke="#999999"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </SvgIcon>
                    </RoundButton>
                    <RoundButton onClick={handleNext}>
                        <SvgIcon viewBox="0 0 20 20" fill="none">
                            <path
                                d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                                stroke="#999999"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </SvgIcon>
                    </RoundButton>
                </IconContainer>
            </Header>
            {movies.length > 0 ? (
                <ContentBlock key={movies[index].id}>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200${movies[index].poster_path}`}
                        alt={movies[index].title}
                    />
                    <div>
                        <BoldText>{movies[index].title}</BoldText>
                        <ContentText>개봉일: {movies[index].release_date}</ContentText>
                        <ContentText>{movies[index].overview}</ContentText>
                    </div>
                </ContentBlock>
            ) : (
                <ContentText>영화 데이터를 불러오는 중...</ContentText>
            )}
        </Container>
    );
}

import { config } from "dotenv";
import type { Request, Response } from "express";

config();

const API_URL = process.env.MOVIE_API_URL;
const API_KEY = process.env.MOVIE_API_KEY!;

export default class MovieController {
  public static async getMovieByKeyword(req: Request, res: Response) {
    try {
      // Gets the keyword from the query params
      const keyword = req.query.keyword as string | undefined;
      let url = `${API_URL}/search/movie`;

      if (keyword)
        url += `?query=${keyword}&include_adult=false&language=en-US&page=1`;

      // Fetch the data / consume the TMDB API
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      // If TMDB responds with an error, return it
      if (!response.ok) {
        return res.status(response.status).json({ message: "Bad Request" });
      }

      // Parse incoming JSON data
      const data = await response.json();

      // Get only the result key
      let results = (data["results"] ?? []) as any[];

      // For each movie, adds a random movie score
      results = results.map((movie: any) => ({
        ...movie,
        score: MovieController.getRandomMovieScore(),
      }));

      // Once finished, sends the data
      return res.status(200).json({ data: results });
    } catch (err) {
      // Catch any unexpected error
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Generates a random score between 0 and 99
  private static getRandomMovieScore(): number {
    return Math.floor(Math.random() * 100);
  }
}

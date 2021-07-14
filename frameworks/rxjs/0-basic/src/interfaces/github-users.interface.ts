import { GithubUser } from "./github-user.interface";

export interface GitHubUsers {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}

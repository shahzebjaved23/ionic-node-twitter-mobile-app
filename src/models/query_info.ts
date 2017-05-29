export class QueryInfo {
	constructor(public player: String, 
				public team: String, 
				public author: String, 
				public useDb: boolean,
				public player_team_op: String,
				public team_author_op: String){
	}
}
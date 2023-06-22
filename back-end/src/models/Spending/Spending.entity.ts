import dayjs from 'dayjs';
import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import Category from '../Category/Category.entity';
import AppUser from '../AppUser/AppUser.entity';

@Entity()
@ObjectType()
export default class Spending {
	constructor(
		title: string,
		date: Date,
		unit: number,
		weight: number,
		category: Category
	) {
		this.title = title;
		this.date = date;
		this.unit = unit;
		this.weight = weight;
		this.category = category;
	}

	@PrimaryGeneratedColumn('uuid')
	@Field(() => ID)
	id: string;

	@Column()
	@Field()
	title: string;

	@Column()
	@Field()
	date: Date;

	@Field(() => String)
	localizedDate() {
		return dayjs(this.date).format('DD/MM/YYYY');
	}

	@Column()
	@Field()
	unit: number;

	@Column()
	@Field()
	weight: number;

	@ManyToOne(() => Category, (category) => category.spendings, {
		eager: true,
		onDelete: 'CASCADE',
	})
	@Field(() => Category)
	category: Category;

	@ManyToOne(() => AppUser, (user) => user.spendings, {
		onDelete: 'CASCADE',
	})
	@Field(() => AppUser)
	user: AppUser;
}

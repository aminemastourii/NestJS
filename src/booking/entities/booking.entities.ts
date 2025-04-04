import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerID: number;

  @Column({ type: 'date' })
  bookingDate: Date;

  @Column('decimal')
  totalAmount: number;
  @Column()
  destination: string;
  

  
}
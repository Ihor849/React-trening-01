import PropTypes from 'prop-types'
import {Table,Thead,Th,Tr,Td } from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({transactions}) => {
    return (
        <Table>
  <Thead>
    <Tr>
      <Th >Type</Th >
      <Th >Amount</Th >
      <Th >Currency</Th >
    </Tr>
  </Thead>
  <tbody>
		{transactions.map(({ id, type, amount, currency }) => (
		
			<Tr
				key={id}
				type={type}
				amount={amount}
				currency={currency}>
     <Td>{type}</Td>
     <Td>{amount}</Td>
     <Td>{currency}</Td>
   </Tr>
))}
  </tbody>
</Table>
    )
}
 

TransactionHistory: PropTypes.objectOf(PropTypes.string)


// TransactionHistory.propTypes = {
// 		type: PropTypes.string.isRequired,
// 		amount: PropTypes.string.isRequired,
// 		currency: PropTypes.string.isRequired,
// 		id: PropTypes.string.isRequired,
// }
	
	
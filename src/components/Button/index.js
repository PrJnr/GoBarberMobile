import React from '~/components/Button/node_modules/react';
import { ActivityIndicator } from 'react-native';
import PropTypes from '~/components/Button/node_modules/prop-types'

import { Container, Text} from './styles';

function Button ({children, loading, ...rest}) {
  return (
      <Container {...rest}>
          {loading ? ( <ActivityIndicator size="small" color="#FFF" />) : <Text>{children}</Text> }
      </Container>
  )
}

Button.propTypes ={
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
}

Button.defaultProps = {
    loading: false,
}

export default Button;
